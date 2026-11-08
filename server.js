const express = require("express");
const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "links.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

function readLinks() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeLinks(links) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(links, null, 2));
}

function isValidUrl(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol);
  } catch {
    return false;
  }
}

app.get("/api/links", (req, res) => {
  const links = readLinks();
  res.json(links);
});

app.post("/api/links", (req, res) => {
  const { target } = req.body || {};

  if (!target || !isValidUrl(target)) {
    return res.status(400).json({
      error: "Target URL harus berupa URL http/https yang valid."
    });
  }

  const links = readLinks();
  const code = nanoid(6);
  links[code] = {
    code,
    target,
    createdAt: new Date().toISOString()
  };

  writeLinks(links);

  const shortUrl = `http://localhost:${PORT}/${code}`;
  return res.json({
    code,
    target,
    shortUrl,
    createdAt: links[code].createdAt
  });
});

app.get("/:code", (req, res) => {
  const { code } = req.params;
  const links = readLinks();
  const link = links[code];

  if (!link) {
    return res.status(404).send("Short link tidak ditemukan.");
  }

  return res.redirect(302, link.target);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Safe shortlink server running on http://localhost:${PORT}`);
});
