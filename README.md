# Link Opener

A mobile-friendly static website for opening a user-provided HTTP(S) URL in a new browser tab.

## Features

- Responsive layout for phones and desktop
- Paste-link button, URL validation, and browser-based opening
- Installable/offline-capable PWA shell on supported browsers
- Privacy-friendly: no URL is sent to a third-party redirect-checking service
- Indonesian usage guidance

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. Service workers and PWA installation require HTTPS (or localhost).

## Publish with GitHub Pages

In the repository, open **Settings → Pages**. Select **Deploy from a branch**, choose `main` and `/(root)`, then save. GitHub Pages will provide the published site URL after deployment completes.

## Scope and limitations

The page opens the submitted URL in the user's browser. Browsers follow ordinary HTTP redirects when the destination sends them. The page does not bypass ads, timers, CAPTCHA, login, verification, or other interstitial steps, and does not extract hidden destinations from intermediary pages. Complete any such steps through the site's normal flow.

This project does not include an AI service. A static GitHub Pages site cannot securely store a private AI API key. Any future AI feature should be limited to general safe-use guidance, use a secured backend, and must not automate or bypass another site's interstitials or protections.
