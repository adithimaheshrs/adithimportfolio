/* Renders .featured, .cards-grid, tab counts, and the hero count from window.PROJECTS. */
(() => {
  const RESOURCE_MAP = {
    "assets/featured-cover.png": "img-featured-cover",
    "assets/ux4ux-cover.png": "img-ux4ux-cover",
    "assets/feminist-smart-city-cover.png": "img-smartcity-cover",
    "assets/db-dilemmaa-cover.png": "img-dbdilemma-cover",
    "assets/bentro-cover.png": "img-bentro-cover",
    "assets/unsub-cover.png": "img-unsub-cover",
    "assets/plantacura-cover.png": "img-plantacura-cover",
    "assets/chakram-cover.png": "img-chakram-cover",
    "assets/confidential-cover.png": "img-confidential-cover"
  };
  const resolveResourceUrl = (path) => {
    if (!path) return path;
    const id = RESOURCE_MAP[path];
    if (id && window.__resources && window.__resources[id]) return window.__resources[id];
    return path;
  };
  const PROJECTS = window.PROJECTS || [];
  const pad = (n) => String(n).padStart(2, "0");
  const featuredProject = PROJECTS.find(p => p.featured);
  const listed = PROJECTS.filter(p => !p.featured);

  const heroCount = document.getElementById("hero-count");
  if (heroCount) heroCount.textContent = pad(PROJECTS.length);

  const arrowSvg = `<svg class="arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 17 L17 7 M9 7 H17 V15"/></svg>`;

  function renderFeatured(p) {
    const section = document.querySelector(".featured");
    if (!p || !section) return;
    section.dataset.cat = p.cat;
    const kickerRest = p.kickerBits.map(b => `<span>${b}</span><span>·</span>`).join("").replace(/<span>·<\/span>$/, "");
    const resolvedFeaturedImage = resolveResourceUrl(p.image);
    section.innerHTML = `
      <a class="featured-art" href="${p.href}" aria-label="Open case study">
        <image-slot id="${p.imageSlotId}" shape="rect" fit="cover" ${resolvedFeaturedImage ? `src="${resolvedFeaturedImage}"` : ""} placeholder="${p.imagePlaceholder}" style="position:absolute; inset:0; width:100%; height:100%;"></image-slot>
        <span class="badge">${p.thumbLabel}</span>
      </a>
      <div class="featured-body">
        <div class="kicker">
          <span class="pill">Featured</span>
          ${kickerRest}
        </div>
        <h2 style="${p.titleStyle || ""}">${p.title}${p.titleIt ? ` : <span class="it">${p.titleIt}</span>` : ""}</h2>
        <p class="lede">${p.lede || ""}</p>
        <dl class="featured-meta">
          ${Object.entries(p.meta || {}).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
        </dl>
        <a class="featured-cta" href="${p.href}">
          Read the case study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17 L17 7 M9 7 H17 V15"/></svg>
        </a>
      </div>`;
  }

  function renderCard(p, num) {
    const titleHtml = p.titleIt
      ? `${p.title} <span class="it">${p.titleIt}</span>`
      : p.title;
    const tag = (p.locked || p.comingSoon) ? "div" : "a";
    const hrefAttr = (p.locked || p.comingSoon) ? "" : ` href="${p.href}"`;
    const badgeText = p.comingSoon ? `${pad(num)} · coming soon` : p.locked ? `${pad(num)} · under nda` : `${pad(num)} · ${p.kickerLabel.toLowerCase()} · ${p.year}`;
    const footRight = p.comingSoon ? `<span class="nda-pill">Coming Soon</span>` : p.locked ? `<span class="nda-pill">Under NDA</span>` : arrowSvg;
    const resolvedCardImage = resolveResourceUrl(p.image);
    return `
      <${tag} class="proj-card${(p.locked || p.comingSoon) ? " draft" : ""}"${hrefAttr} data-cat="${p.cat}">
        <div class="art ${p.thumb || ""}"${resolvedCardImage ? ` style="background-image:url('${resolvedCardImage}');background-size:cover;background-position:center"` : ""}><span class="badge">${badgeText}</span></div>
        <div class="proj-card-body">
          <div class="kicker">${p.kickerLabel} · ${String(p.readMins).padStart(2, "0")} min read</div>
          <h3>${titleHtml}</h3>
          <p class="sub">${p.sub}</p>
          <div class="foot">
            <span class="meta">${p.year}</span>
            ${footRight}
          </div>
        </div>
      </${tag}>`;
  }

  function renderCards() {
    const grid = document.querySelector(".cards-grid");
    if (!grid) return;
    grid.innerHTML = listed.map((p, i) => renderCard(p, i + 2)).join("");
  }

  // Labels/nouns for known categories; unknown cats fall back to a capitalized word.
  const CAT_META = {
    research: { tab: "Research", word: "research", noun: "studies" },
    web: { tab: "Web", word: "web design", noun: "projects" },
    mobile: { tab: "Mobile", word: "mobile design", noun: "projects" },
    writing: { tab: "Writing", word: "writing", noun: "pieces" },
    brand: { tab: "Brand", word: "brand design", noun: "projects" }
  };
  function metaFor(cat) {
    if (CAT_META[cat]) return CAT_META[cat];
    const word = cat.charAt(0).toUpperCase() + cat.slice(1);
    return { tab: word, word: word.toLowerCase(), noun: "projects" };
  }

  function renderTabs() {
    const tabsEl = document.querySelector(".tabs");
    if (!tabsEl) return;
    const cats = [];
    PROJECTS.forEach(p => { if (!cats.includes(p.cat)) cats.push(p.cat); });
    const allBtn = `<button class="tab" data-cat="all" aria-pressed="true" type="button">All <span class="ct" data-ct="all">00</span></button>`;
    const catBtns = cats.map(cat => `<button class="tab" data-cat="${cat}" aria-pressed="false" type="button"><span class="swatch"></span>${metaFor(cat).tab} <span class="ct" data-ct="${cat}">00</span></button>`).join("");
    tabsEl.innerHTML = allBtn + catBtns;
  }

  function renderTabCounts() {
    const counts = { all: PROJECTS.length };
    PROJECTS.forEach(p => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
    document.querySelectorAll(".tab .ct[data-ct]").forEach(el => {
      const key = el.dataset.ct;
      el.textContent = pad(counts[key] || 0);
    });
  }

  function setupFilter() {
    const tabs = document.querySelectorAll(".tab");
    const featured = document.querySelector(".featured");
    const note = document.getElementById("filter-note");
    const indexLbl = document.querySelector(".index-title .lbl");
    const labels = { all: { word: "everything", noun: "projects" } };
    PROJECTS.forEach(p => { labels[p.cat] = metaFor(p.cat); });

    function applyFilter(cat) {
      let total = 0, indexCount = 0;
      const fMatch = featuredProject && (cat === "all" || cat === featuredProject.cat);
      if (featured) featured.classList.toggle("hide", !fMatch);
      if (fMatch) total++;

      document.querySelectorAll(".cards-grid .proj-card").forEach(card => {
        const match = cat === "all" || cat === card.dataset.cat;
        card.classList.toggle("hide", !match);
        if (match) { total++; indexCount++; }
      });

      const meta = labels[cat] || labels.all;
      if (note) note.innerHTML = `Showing <span class="em">${meta.word}</span> · ${pad(total)} ${meta.noun}`;
      if (indexLbl) indexLbl.textContent = `${pad(indexCount)} ${indexCount === 1 ? "entry" : "entries"} · scroll to read`;
    }

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.setAttribute("aria-pressed", t === tab ? "true" : "false"));
        applyFilter(tab.dataset.cat);
      });
    });

    applyFilter("all");
  }

  renderFeatured(featuredProject);
  renderCards();
  renderTabs();
  renderTabCounts();
  setupFilter();
})();
