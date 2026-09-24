# Landing Page

A static landing page built with plain HTML, CSS and JavaScript. No build step is required; open `index.html` in a browser or serve the folder with any static file server.

## Announcement banner

The banner at the top of the page is defined in `index.html` inside the element with the id `announcement-banner`.

- Edit the text and link inside `.banner__text` to change the message.
- The banner can be dismissed with the close button. The dismissal is stored in `localStorage` so it stays hidden for that visitor.
- When you publish a new message, change the `data-banner-id` attribute to a new value so visitors who dismissed the previous banner see the new one.
- Two colour schemes are available. The default is dark; adding the `banner--light` class to the banner element (as `index.html` does) gives a white background with a green accent bar, link and close button.
- Dark colours are controlled by the `--color-banner-bg` and `--color-banner-text` variables in `css/styles.css`; the white variant uses the `--color-banner-light-*` variables.

## Hero image

The hero section shows a photo next to the headline. The photo lives at `images/hero.jpg`; replace that file (landscape works best) and update the `alt` text on the `<img>` in `index.html` if the photo changes. On narrow screens the photo stacks above the headline.

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## ICAEW Benefits+ banner ad (white variant)

A Posh Virtual Receptionists banner for the ICAEW Benefits+ programme (20% off the first three months' invoices for ICAEW members) sits below the hero. It follows the standard ICAEW partner-banner format: POSH logo, ICAEW Benefits+ Partner mark, headline and offer, call to action, photo, and small print.

This is the white version of the banner on the `Banner-Ad` branch: a white card inside a Brand Green frame, with a green edge band, tag and call to action, and the offer picked out in a deeper green (`#25784F`) that stays readable on white. The rest of the POSH palette (Dark Navy `#23394C`, Brand Green `#6FC097`, Mint `#A0E395`) and the P22 Mackinac Pro brand face with Arial fallback are unchanged, so exported images rendered on a machine without the brand font will show Arial.

- Markup lives in `index.html` (the `.ad` element) and, as a standalone copy for previewing and exporting, in `banner-ad/index.html`. Keep the two in sync.
- Styles are in `css/banner-ad.css`; colours are the `--ad-*` variables at the top.
- The POSH logo is `images/posh-logo.png` (navy letters, green dot, for light backgrounds); `images/posh-logo-white.png` is the white version if the ad is ever placed on a dark panel again.
- The ICAEW logo (`images/icaew-benefits-partner.png`) is the approved white RGB artwork supplied by ICAEW. It is not recoloured; on the white card it sits on a small navy tile so it stays legible.
- The photo is loaded from `images/banner-photo.jpg`, currently the same woman-on-phone shot used in the hero. Replace that file to change it (landscape, subject on the right works best).

Fixed-size ad units live in `banner-ad/sizes.html` with their own styles in `css/banner-ad-sizes.css`:

| Unit | Size | Export |
|------|------|--------|
| Leaderboard | 728 x 90 | `banner-728x90.png` (and `@2x`) |
| Mobile | 620 x 349 | `banner-620x349.png` (and `@2x`) |

The 1x files are the exact pixel sizes ad networks ask for; the `@2x` files are the same units rendered at double resolution for retina placements. The responsive banner is also exported at 1200 x 200 and at a 400px mobile width.

To export all PNGs (in `banner-ad/export/`) for sending to ICAEW or using in email:

```sh
npm install playwright   # once
node banner-ad/export.js
```
