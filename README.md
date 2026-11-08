# Link Opener

A small static website for opening a user-provided HTTP(S) URL in a new browser tab.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server.

## Publish with GitHub Pages

In the repository, open **Settings → Pages**. Select **Deploy from a branch**, choose `main` and `/(root)`, then save. GitHub Pages will provide the published site URL after deployment completes.

## Scope and limitations

The page opens the submitted URL in the user's browser. Browsers follow ordinary HTTP redirects when the destination sends them. The page does not bypass ads, timers, CAPTCHA, login, verification, or other interstitial steps, and does not extract hidden destinations from intermediary pages. Complete any such steps through the site's normal flow.
