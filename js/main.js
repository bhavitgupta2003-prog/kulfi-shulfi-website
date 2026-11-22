/* Kulfi Shulfi — shared behaviour: header/footer, rendering, forms, animations */
(function () {
  "use strict";
  var KS = window.KS || { config: {}, stick: [], slice: [], family: [], protein: [], stores: [], jobs: [] };
  var C = KS.config || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  var ICON = {
    pin: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  window.KS_ICON = ICON;

  /* ---------- Header & footer ---------- */
  var page = document.body.getAttribute("data-page") || "";
  var links = [
    ["home", "index.html", "Home"],
    ["kulfis", "kulfis.html", "Our Kulfis"],
    ["stores", "stores.html", "Store Locator"],
    ["business", "business.html", "Business Enquiries"],
    ["careers", "careers.html", "Careers"]
  ];
  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container nav">' +
      '<a class="brand" href="index.html" aria-label="Kulfi Shulfi home"><img src="assets/img/brand/logo.jpg" alt="" width="52" height="52"><span>Kulfi Shulfi</span></a>' +
      '<button class="menu-btn" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu"><span></span></button>' +
      '<ul class="nav-links" id="nav-links">' +
      links.map(function (l) {
        var cur = l[0] === page ? ' aria-current="page"' : "";
        var cls = l[0] === "stores" ? ' class="cta"' : "";
        return "<li" + cls + '><a href="' + l[1] + '"' + cur + ">" + l[2] + "</a></li>";
      }).join("") + "</ul></div>";
    var btn = $(".menu-btn", header), nav = $("#nav-links", header);
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }); });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    var contact = [];
    if (C.email) contact.push('<li><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>");
    if (C.phone) contact.push('<li><a href="tel:' + esc(C.phone.replace(/\s/g, "")) + '">' + esc(C.phone) + "</a></li>");
    if (C.address) contact.push("<li>" + esc(C.address) + "</li>");
    if (!contact.length) contact.push('<li class="muted-note">Contact details coming soon.</li>');
    var soc = [["instagram", "IG"], ["facebook", "FB"], ["youtube", "YT"], ["linkedin", "in"], ["whatsapp", "WA"]]
      .filter(function (s) { return C[s[0]]; })
      .map(function (s) { return '<a href="' + esc(C[s[0]]) + '" target="_blank" rel="noopener" aria-label="' + s[0] + '">' + s[1] + "</a>"; }).join("");
    footer.innerHTML =
      '<div class="container"><div class="footer-grid">' +
      '<div class="foot-brand"><img src="assets/img/brand/logo.jpg" alt="Kulfi Shulfi logo" width="72" height="72" loading="lazy">' +
      "<p>Bringing back the taste of traditional kulfi, one bite at a time.</p>" +
      (soc ? '<div class="socials">' + soc + "</div>" : "") + "</div>" +
      '<div><h4>Explore</h4><ul><li><a href="index.html">Home</a></li><li><a href="kulfis.html">Our Kulfis</a></li><li><a href="stores.html">Store Locator</a></li></ul></div>' +
      '<div><h4>Work with us</h4><ul><li><a href="business.html">Business Enquiries</a></li><li><a href="business.html#enquiry">Partner With Us</a></li><li><a href="careers.html">Careers</a></li></ul></div>' +
      "<div><h4>Contact</h4><ul>" + contact.join("") + "</ul></div></div>" +
      '<div class="footer-bottom"><span>&copy; ' + new Date().getFullYear() + " Kulfi Shulfi. All rights reserved.</span><span>Real milk. Real fruits. Natural ingredients.</span></div></div>";
  }

  /* ---------- Product cards ---------- */
  function productCard(p, tag) {
    return '<article class="product reveal"><div class="img"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' kulfi" width="1000" height="667" loading="lazy"></div>' +
      '<div class="body"><h3>' + esc(p.name) + "</h3>" + (p.desc ? "<p>" + esc(p.desc) + "</p>" : "") + (tag ? '<span class="tag">' + esc(tag) + "</span>" : "") + "</div></article>";
  }
  $$("[data-products]").forEach(function (el) {
    var key = el.getAttribute("data-products");
    var list = KS[key] || [];
    el.innerHTML = list.map(function (p) { return productCard(p); }).join("");
    var c = document.querySelector('[data-count="' + key + '"]');
    if (c) c.textContent = list.length + (list.length === 1 ? " flavour" : " flavours");
  });
  $$("[data-flavour-count]").forEach(function (el) { el.textContent = (KS[el.getAttribute("data-flavour-count")] || []).length; });

  // Home flavour strip: picks from the stick range by name
  var strip = $("[data-strip]");
  if (strip) {
    var want = ["Kesar Pista", "Chilli Guava", "Gulkand", "Paan", "Blackcurrant", "Mango", "Death by Chocolate", "Litchi", "Tender Coconut", "Strawberry"];
    var picks = want.map(function (n) { return (KS.stick || []).filter(function (p) { return p.name === n; })[0]; }).filter(Boolean);
    strip.innerHTML = picks.map(function (p) {
      return '<a class="tile" href="kulfis.html#stick" style="text-decoration:none"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' kulfi" width="1000" height="667" loading="lazy"><span>' + esc(p.name) + "</span></a>";
    }).join("");
  }

  // Protein coming soon
  var soon = $("[data-protein]");
  if (soon) {
    soon.innerHTML = (KS.protein || []).map(function (p) {
      return '<div class="soon-card reveal"><div class="ph">' + (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' protein kulfi" loading="lazy">' : "Photo coming soon") + "</div><span>Coming soon</span><h3>" + esc(p.name) + " Protein Kulfi</h3></div>";
    }).join("");
  }

  /* ---------- Catalogue category tabs highlight ---------- */
  var catLinks = $$(".cat-nav a");
  if (catLinks.length && "IntersectionObserver" in window) {
    var secs = catLinks.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); }).filter(Boolean);
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) catLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    secs.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Stores ---------- */
  var storeGrid = $("[data-stores]");
  if (storeGrid) {
    var stores = KS.stores || [];
    var input = $("#store-search"), count = $("#store-count"), layout = $("#store-layout");
    var render = function (q) {
      q = (q || "").trim().toLowerCase();
      var list = stores.filter(function (s) { return !q || [s.name, s.area, s.address].join(" ").toLowerCase().indexOf(q) > -1; });
      if (count) count.textContent = stores.length ? list.length + " of " + stores.length + " stores" : "";
      if (!stores.length) {
        storeGrid.innerHTML = '<div class="empty"><div class="big">' + ICON.pin + '</div><h3>Our store list is on its way</h3><p class="lead" style="margin:0 auto">We\'re adding our outlets here. Check back soon to find a Kulfi Shulfi near you.</p></div>';
      } else if (!list.length) {
        storeGrid.innerHTML = '<div class="empty"><h3>No stores match "' + esc(q) + '"</h3><p>Try a different area or locality.</p></div>';
      } else {
        storeGrid.innerHTML = list.map(function (s) {
          return '<article class="store"><div class="top"><div class="pin">' + ICON.pin + "</div><div>" +
            (s.area ? '<div class="area">' + esc(s.area) + "</div>" : "") + "<h3>" + esc(s.name) + "</h3>" +
            (s.address ? "<address>" + esc(s.address) + "</address>" : "") + "</div></div>" +
            (s.mapsUrl ? '<a class="btn btn-primary" href="' + esc(s.mapsUrl) + '" target="_blank" rel="noopener">Get Directions ' + ICON.arrow + "</a>" : "") + "</article>";
        }).join("");
      }
    };
    render("");
    if (input) input.addEventListener("input", function () { render(input.value); });
    if (!stores.length) { var tools = $(".store-tools"); if (tools) tools.style.display = "none"; }

    // Optional interactive map: only if at least one store has coordinates
    var geo = stores.filter(function (s) { return typeof s.lat === "number" && typeof s.lng === "number"; });
    if (geo.length && layout) {
      layout.classList.add("has-map");
      var mapEl = document.createElement("div"); mapEl.id = "map"; mapEl.setAttribute("aria-label", "Map of Kulfi Shulfi stores"); layout.appendChild(mapEl);
      var css = document.createElement("link"); css.rel = "stylesheet"; css.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"; document.head.appendChild(css);
      var js = document.createElement("script"); js.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
      js.onload = function () {
        var map = L.map("map", { scrollWheelZoom: false });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap contributors", maxZoom: 19 }).addTo(map);
        var pts = geo.map(function (s) {
          L.marker([s.lat, s.lng]).addTo(map).bindPopup("<strong>" + esc(s.name) + "</strong><br>" + esc(s.address || "") + (s.mapsUrl ? '<br><a href="' + esc(s.mapsUrl) + '" target="_blank" rel="noopener">Get directions</a>' : ""));
          return [s.lat, s.lng];
        });
        map.fitBounds(pts, { padding: [40, 40], maxZoom: 15 });
      };
      document.body.appendChild(js);
    }
  }

  /* ---------- Jobs ---------- */
  var jobsEl = $("[data-jobs]");
  if (jobsEl) {
    var jobs = KS.jobs || [];
    jobsEl.innerHTML = jobs.length ? jobs.map(function (j) {
      return '<article class="job reveal"><div><h3>' + esc(j.title) + '</h3><div class="meta">' +
        (j.location ? '<span class="pill">' + esc(j.location) + "</span>" : "") + (j.type ? '<span class="pill">' + esc(j.type) + "</span>" : "") + "</div>" +
        (j.description ? "<p>" + esc(j.description) + "</p>" : "") + '</div><a class="btn btn-primary" href="#apply" data-role="' + esc(j.title) + '">Apply Now</a></article>';
    }).join("") : '<div class="empty"><h3>No open positions right now</h3><p class="lead" style="margin:0 auto">But we\'re always keen to meet passionate people. Send us a general application below.</p></div>';
    $$("[data-role]", jobsEl).forEach(function (a) {
      a.addEventListener("click", function () { var f = $("#position"); if (f) f.value = a.getAttribute("data-role"); });
    });
  }

  /* ---------- Forms ---------- */
  $$("form[data-form]").forEach(function (form) {
    var status = $(".form-status", form);
    var show = function (type, msg) { status.className = "form-status show " + type; status.textContent = msg; };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var hp = form.querySelector('[name="_gotcha"]'); if (hp && hp.value) return; // spam trap
      var endpoint = form.getAttribute("data-form") === "careers" ? C.careersFormEndpoint : C.businessFormEndpoint;
      if (!endpoint) { show("err", "This form isn't connected yet, so your message wasn't sent. Please check back soon."); return; }
      var btn = $('button[type="submit"]', form), label = btn.textContent;
      btn.disabled = true; btn.textContent = "Sending…";
      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); form.reset(); show("ok", "Thank you! We've received your message and will get back to you soon."); })
        .catch(function () { show("err", "Sorry, something went wrong while sending. Please try again in a moment."); })
        .then(function () { btn.disabled = false; btn.textContent = label; });
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var obs = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) : null;
  $$(".reveal").forEach(function (el) { obs ? obs.observe(el) : el.classList.add("in"); });
})();
