# R-Kano.github.io

Personal academic website, served by GitHub Pages at <https://r-kano.github.io/>.

Plain HTML/CSS/JS — no build step. Edit and push, and the site updates in a minute or so.

## Structure

```
index.html            # all page content — edit text here
photos.html           # photo album page (photos.html?e=<album id>), linked from News
assets/css/style.css  # styles (change --accent at the top to recolor)
assets/js/main.js     # dark mode, mobile menu, publication filter, lightbox
assets/js/events.js   # list of photo albums (newest first)
assets/js/photos.js   # renders an album on photos.html
assets/img/           # profile photo, favicon
assets/img/events/<id>/  # album photos (max 1600px) and thumb/ (600px wide)
assets/video/         # album videos (H.264 MP4, keep each well under 100 MB)
.nojekyll             # tells GitHub Pages to serve files as-is
```

## Customizing

- **Photo:** add `assets/img/profile.jpg` and update the `<img src>` in the hero section.
- **Links:** search `index.html` for `XXXXXXX`, `your-id`, `your.email`, and `0000-0000` and replace them.
- **Placeholders:** anything in `[square brackets]` is meant to be replaced.
- **Publications:** copy a `<li class="pub">` block; set `data-type` to `journal`, `conference`, or `preprint` so the filter buttons work.
- **Photo albums:** put images in `assets/img/events/<id>/` (and smaller copies in `thumb/`), add an entry to `assets/js/events.js`, then add `<a class="pic-link" href="photos.html?e=<id>">Photos</a>` to the news item. `photos.html` with no `?e=` lists every album.
- **Shrinking a video:** `ffmpeg -i in.MOV -vf "setpts=0.5*PTS,scale=960:-2" -c:v libx264 -crf 30 -an -movflags +faststart out.mp4` (2x speed, no audio).
- **Remove a section:** delete its `<section>` and the matching link in `<nav>`.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
