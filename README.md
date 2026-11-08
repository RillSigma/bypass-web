# Safe Shortlink

A small Node.js app that creates short links for URLs you own and redirects with HTTP 302. It is designed for safe, transparent redirects only.

## Features
- Create short links for valid http/https destinations
- Store links in a local JSON file
- Redirect with a normal HTTP 302 response
- Simple browser UI for creating and copying links
- Not designed to bypass ads, timers, CAPTCHA, or anti-bot protections on third-party sites

## Run locally

```bash
npm install
node server.js
```

Open:

```text
http://localhost:3000
```

## Deploy

This app can be deployed to services like Render, Railway, or any Node.js hosting platform.

## Safety note

This project is intentionally limited to redirecting URLs you own or are authorized to manage. It does not bypass interstitial pages, login gates, paywalls, ads, CAPTCHA, or other protections on third-party websites.
