// Renders one album (photos.html?e=<id>) or, without ?e, an index of all albums.
(() => {
  const root = document.getElementById("album-root");
  const titleEl = document.getElementById("album-title");
  const metaEl = document.getElementById("album-meta");
  const dir = (id) => `assets/img/events/${id}/`;
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

  const photosOf = (e) => (e.photos || e.sections.flatMap((s) => s.photos)).filter((p) => p.src);

  const id = new URLSearchParams(location.search).get("e");
  const index = EVENTS.findIndex((e) => e.id === id);

  if (index === -1) {
    titleEl.textContent = "Photos";
    root.innerHTML =
      '<div class="album-index">' +
      EVENTS.map((e) =>
        `<a href="photos.html?e=${e.id}">` +
        `<img src="${dir(e.id)}thumb/${photosOf(e)[0].src}" alt="" loading="lazy">` +
        `<time>${e.date}</time><h2>${esc(e.title)}</h2></a>`
      ).join("") +
      "</div>";
    return;
  }

  const ev = EVENTS[index];
  document.title = `${ev.title} | Ryosuke Kano`;
  titleEl.textContent = ev.title;
  metaEl.innerHTML = `<time>${ev.date}</time>${esc(ev.place || "")}`;
  if (ev.link) {
    metaEl.insertAdjacentHTML("beforeend",
      ` · <a href="${ev.link}" target="_blank" rel="noopener">${esc(ev.linkLabel || "Event page")} ↗</a>`);
  }

  // One grid per section (or a single grid when the album has no sections)
  const grid = (sec) => {
    const caption = sec.title ? `${ev.title} · ${sec.title}` : ev.title;
    // Row layout: each tile grows in proportion to its aspect ratio, so photos stay uncropped
    const flex = (ratio) => `style="--r:${ratio.toFixed(3)}"`;
    const items = sec.photos.map((p, i) =>
      p.video
        ? `<a href="${p.video}" data-type="video" class="is-video" ${flex(16 / 9)} data-caption="${esc(p.caption || caption)}">` +
          `<img src="${p.poster}" alt="${esc(p.caption || "")}" loading="lazy"></a>`
        : `<a href="${dir(ev.id)}${p.src}" ${flex(p.w / p.h)} data-caption="${esc(caption)}">` +
          `<img src="${dir(ev.id)}thumb/${p.src}" alt="${esc(caption)}, photo ${i + 1}" width="${p.w}" height="${p.h}" loading="lazy"></a>`
    );
    return (sec.title ? `<h2 class="album-section">${esc(sec.title)}</h2>` : "") +
      `<div class="album" data-album>${items.join("")}</div>`;
  };
  root.innerHTML = (ev.sections || [{ photos: ev.photos }]).map(grid).join("");

  // Justified rows: fill each row to the container width at roughly the target height.
  // The last row keeps the target height instead of being stretched (or left tiny).
  function layout(album) {
    const width = album.clientWidth;
    if (!width) return;
    const gap = parseFloat(getComputedStyle(album).columnGap) || 0;
    const target = Math.min(260, Math.max(110, width / 2.6));
    const place = (row, h) => row.forEach((t) => {
      t.style.flex = "none";
      t.style.width = `${Math.floor(t.ratio * h)}px`;
      t.style.height = `${Math.floor(h)}px`;
    });
    let row = [];
    let sum = 0;
    for (const tile of album.children) {
      tile.ratio = parseFloat(tile.style.getPropertyValue("--r"));
      row.push(tile);
      sum += tile.ratio;
      const h = (width - gap * (row.length - 1)) / sum;
      if (h <= target) {
        place(row, h);
        row = [];
        sum = 0;
      }
    }
    if (row.length) place(row, Math.min(target, (width - gap * (row.length - 1)) / sum));
  }
  const albums = [...root.querySelectorAll(".album")];
  const relayout = () => albums.forEach(layout);
  relayout();
  new ResizeObserver(() => requestAnimationFrame(relayout)).observe(root);

  // Links to the neighbouring albums (EVENTS is newest first)
  const newer = EVENTS[index - 1];
  const older = EVENTS[index + 1];
  const link = (e, label) =>
    e ? `<a href="photos.html?e=${e.id}"><span>${label}</span>${esc(e.title)}</a>` : "<span></span>";
  root.insertAdjacentHTML("beforeend",
    `<nav class="album-nav">${link(newer, "← Newer")}${link(older, "Older →")}</nav>`);
})();
