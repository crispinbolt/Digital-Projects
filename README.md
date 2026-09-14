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
