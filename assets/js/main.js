// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle (remembers choice)
const root = document.documentElement;
document.querySelector(".theme-toggle").addEventListener("click", () => {
  const current = root.getAttribute("data-theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Highlight current section in nav (same-page links only)
const navLinks = [...links.querySelectorAll('a[href^="#"]')];
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

// Publication filter
document.querySelectorAll(".pub-filter button").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pub-filter button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".pub").forEach((p) =>
      p.classList.toggle("hidden", f !== "all" && p.dataset.type !== f)
    );
    // Hide a group heading when none of its papers match
    document.querySelectorAll(".pub-group").forEach((h) => {
      const list = h.nextElementSibling;
      h.classList.toggle("hidden", !list.querySelector(".pub:not(.hidden)"));
    });
  })
);

// Fade sections in on scroll
const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        reveal.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".section .container").forEach((el) => {
  el.classList.add("reveal");
  reveal.observe(el);
});

// News: "Show all" button
const newsMore = document.querySelector(".news-more button");
if (newsMore) {
  newsMore.addEventListener("click", () => {
    document.querySelector(".news").classList.add("expanded");
  });
}

// Lightbox: click any link inside a [data-album] container to browse that container
const lb = document.createElement("div");
lb.className = "lightbox";
lb.innerHTML =
  '<button class="lb-close" aria-label="Close">×</button>' +
  '<button class="lb-prev" aria-label="Previous">‹</button>' +
  '<img alt=""><video controls playsinline hidden></video><p></p>' +
  '<button class="lb-next" aria-label="Next">›</button>';
document.body.appendChild(lb);
const lbImg = lb.querySelector("img");
const lbVid = lb.querySelector("video");
const lbCap = lb.querySelector("p");
let group = [];
let current = 0;

function show(i) {
  current = (i + group.length) % group.length;
  const a = group[current];
  const isVideo = a.dataset.type === "video";
  lbVid.pause();
  lbImg.hidden = isVideo;
  lbVid.hidden = !isVideo;
  if (isVideo) {
    lbVid.src = a.href;
    lbVid.poster = a.querySelector("img").src;
    lbVid.play().catch(() => {});
  } else {
    lbImg.src = a.href;
    lbImg.alt = a.dataset.caption;
  }
  lbCap.textContent = (a.dataset.caption || "") + (group.length > 1 ? `  (${current + 1}/${group.length})` : "");
  const multi = group.length > 1;
  lb.querySelector(".lb-prev").hidden = !multi;
  lb.querySelector(".lb-next").hidden = !multi;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function hide() {
  lbVid.pause();
  lb.classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-album]").forEach((album) => {
  const links = [...album.querySelectorAll("a")];
  links.forEach((a, i) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      group = links;
      show(i);
    })
  );
});
lb.querySelector(".lb-close").addEventListener("click", hide);
lb.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
lb.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
lb.addEventListener("click", (e) => { if (e.target === lb) hide(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") hide();
  if (e.key === "ArrowLeft" && group.length > 1) show(current - 1);
  if (e.key === "ArrowRight" && group.length > 1) show(current + 1);
});
