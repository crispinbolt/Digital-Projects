# Landing Page

A static landing page built with plain HTML, CSS and JavaScript. No build step is required; open `index.html` in a browser or serve the folder with any static file server.

## Announcement banner

The banner at the top of the page is defined in `index.html` inside the element with the id `announcement-banner`.

- Edit the text and link inside `.banner__text` to change the message.
- The banner can be dismissed with the close button. The dismissal is stored in `localStorage` so it stays hidden for that visitor.
- When you publish a new message, change the `data-banner-id` attribute to a new value so visitors who dismissed the previous banner see the new one.
- Colours are controlled by the `--color-banner-bg` and `--color-banner-text` variables in `css/styles.css`.

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## ICAEW Benefits+ banner ad

A Posh Virtual Receptionists banner for the ICAEW Benefits+ programme (20% off the first three months' invoices for ICAEW members) sits below the hero. It follows the standard ICAEW partner-banner format: POSH logo, ICAEW Benefits+ Partner mark, headline and offer, call to action, photo, and small print.

It uses the POSH brand palette (Dark Navy `#23394C`, Brand Green `#6FC097`, Mint `#A0E395`) and the P22 Mackinac Pro brand face with Arial as the fallback, so exported images rendered on a machine without the brand font will show Arial.

- Markup lives in `index.html` (the `.ad` element) and, as a standalone copy for previewing and exporting, in `banner-ad/index.html`. Keep the two in sync.
- Styles are in `css/banner-ad.css`; colours are the `--ad-*` variables at the top.
- The POSH logo is `images/posh-logo-white.png` (white letters, green dot, for dark backgrounds); `images/posh-logo.png` is the navy version for light backgrounds.
- The photo is loaded from `images/banner-photo.jpg`, currently the headset portrait from the POSH template. `images/banner-photo-office.jpg` is the earlier office shot if you want to switch back.
- The ICAEW logo (`images/icaew-benefits-partner.png`) is the approved RGB artwork supplied by ICAEW. Do not recolour or re-draw it.

To export static PNGs (in `banner-ad/export/`) for sending to ICAEW or using in email:

```sh
npm install playwright   # once
node banner-ad/export.js
```
