(function () {
  var S = window.SITE;
  var ARROW = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function ext(h) { return /^https?:/.test(h) ? ' target="_blank" rel="noopener noreferrer"' : ""; }

  function Button(label, href, variant) { return '<a class="btn btn-' + variant + '" href="' + esc(href) + '"' + ext(href) + '>' + esc(label) + '</a>'; }
  function WorkTile(w) {
    return '<figure class="tile" tabindex="0"><div class="ph" style="--r:' + w.ratio + '"><img src="' + esc(w.image) + '" alt="' + esc(w.title) + '" loading="lazy" style="object-position:' + w.pos + '"></div>' +
      '<figcaption><strong>' + esc(w.title) + '</strong><span>' + esc(w.text) + '</span></figcaption></figure>';
  }
  var ICON = {
    reel: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5z"/>',
    tiktok: '<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.5 2.5 2 3.8 4.5 4"/>',
    story: '<circle cx="12" cy="12" r="9" stroke-dasharray="4 3"/><circle cx="12" cy="12" r="3.5"/>',
    photo: '<rect x="3" y="6" width="18" height="13" rx="3"/><circle cx="12" cy="12.5" r="3.2"/><path d="M8 6l1.5-2h5L16 6"/>',
    bag: '<path d="M6 8h12l-1 11H7z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    badge: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>'
  };
  function CollabCard(i) {
    return '<div class="cc' + (i.wide ? ' wide' : '') + '"><span class="ico"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[i.icon] + '</svg></span>' +
      '<small>' + esc(i.tag) + '</small><strong>' + esc(i.title) + '</strong><span class="t">' + esc(i.text) + '</span></div>';
  }
  function SocialCard(s) {
    var live = !!s.url;
    return '<article class="social' + (live ? "" : " is-soon") + '"><img src="' + esc(s.image) + '" alt="" loading="lazy" style="object-position:' + s.pos + '">' +
      '<div class="social-body"><div><h3>' + esc(s.platform) + '</h3><p>' + esc(s.handle) + '</p></div>' +
      (live ? '<a class="visit" href="' + esc(s.url) + '"' + ext(s.url) + ' aria-label="Open ' + esc(s.platform) + ' profile">Visit ' + ARROW + '</a>' : '<span class="visit">Link coming soon</span>') +
      '</div></article>';
  }

  var n = S.name.split(" ");
  document.getElementById("app").innerHTML =
    '<header class="nav"><a class="mark" href="#about" aria-label="Back to top">TS</a><nav>' +
    S.nav.map(function (x) { return '<a href="' + x.href + '">' + esc(x.label) + '</a>'; }).join("") + '</nav></header><main>' +

    '<section id="about" class="hero">' +
      '<div class="hero-bg" aria-hidden="true"><img src="' + esc(S.hero.image) + '" alt=""></div>' +
      '<div class="hero-inner">' +
        '<div class="hero-img"><img src="' + esc(S.hero.image) + '" alt="' + esc(S.hero.alt) + '" fetchpriority="high" style="object-position:' + S.hero.pos + '"></div>' +
        '<div class="hero-copy">' +
          '<p class="reach">' + esc(S.tiktokReach) + '</p>' +
          '<h1><span>' + esc(n[0]) + '</span> <em>' + esc(n.slice(1).join(" ")) + '</em></h1>' +
          '<p class="roles">' + S.roles.map(esc).join('<i aria-hidden="true">•</i>') + '</p>' +
          '<p class="intro">' + esc(S.intro) + '</p>' +
          '<div class="cta-row">' + Button("View My Work", "#work", "solid") + Button(S.contact.label, S.contact.href, "line") + '</div>' +
        '</div></div></section>' +

    '<section id="work" class="work wrap"><div class="head"><h2>' + esc(S.work.title) + '</h2><p>' + esc(S.work.lead) + '</p></div>' +
      '<div class="masonry">' + S.work.items.map(WorkTile).join("") + '</div></section>' +

    '<section id="collaborate" class="collab"><div class="wrap">' +
      '<div class="collab-head"><h2>' + esc(S.collab.title) + '</h2><p>' + esc(S.collab.text) + '</p></div>' +
      '<div class="cc-grid">' + S.collab.items.map(CollabCard).join("") + '</div>' +
      '<div class="banner"><img src="' + esc(S.collab.banner.image) + '" alt="" loading="lazy" style="--p:' + S.collab.banner.pos + ';--pd:' + S.collab.banner.posDesktop + '">' +
        '<div class="banner-body"><h3>' + esc(S.collab.ctaTitle) + '</h3>' + Button(S.collab.ctaLabel, S.contact.href, "light") + '</div></div>' +
    '</div></section>' +

    '<section id="socials" class="socials wrap"><div class="head"><h2>' + esc(S.socials.title) + '</h2></div>' +
      '<div class="social-grid">' + S.socials.items.map(SocialCard).join("") + '</div></section></main>' +
    '<footer class="foot"><div class="wrap">' +
      '<p class="foot-name">' + esc(S.name) + '</p>' +
      '<p class="foot-text">' + esc(S.footer.text) + '</p>' +
      '<div class="foot-soc">' + S.socials.items.filter(function (x) { return x.url; }).map(function (x) { return '<a href="' + esc(x.url) + '"' + ext(x.url) + '>' + esc(x.platform) + '</a>'; }).join("") + '</div>' +
      '<div class="foot-bot"><span>© ' + new Date().getFullYear() + ' ' + esc(S.name) + '</span><a href="#about">Back to top</a></div>' +
    '</div></footer>';
  document.title = S.name + " — " + S.roles[0] + " & " + S.roles[1];
})();
