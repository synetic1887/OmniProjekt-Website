/* OmniProjekt GmbH – small progressive enhancements.
   Everything works without JavaScript; this script only improves it. */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Project gallery ---------- */
  var gallery = document.querySelector("[data-gallery]");
  if (gallery) {
    var stageImg = gallery.querySelector(".gallery-stage img");
    var caption = gallery.querySelector(".gallery-caption .text");
    var pos = gallery.querySelector(".gallery-caption .pos");
    var links = Array.prototype.slice.call(gallery.querySelectorAll(".thumbs a"));
    var current = 0;

    var show = function (i) {
      current = (i + links.length) % links.length;
      var a = links[current];
      stageImg.src = a.getAttribute("href");
      stageImg.alt = a.getAttribute("data-alt");
      caption.textContent = a.getAttribute("data-caption");
      pos.textContent = (current + 1) + " / " + links.length;
      links.forEach(function (l, k) { l.setAttribute("aria-current", k === current ? "true" : "false"); });
    };

    links.forEach(function (a, k) {
      a.addEventListener("click", function (e) { e.preventDefault(); show(k); });
    });
    gallery.querySelector(".gallery-nav.prev").addEventListener("click", function () { show(current - 1); });
    gallery.querySelector(".gallery-nav.next").addEventListener("click", function () { show(current + 1); });
    // Arrow keys only while focus is inside the gallery
    gallery.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { show(current - 1); }
      if (e.key === "ArrowRight") { show(current + 1); }
    });
    // Preload full-size images after the page has loaded
    window.addEventListener("load", function () {
      links.forEach(function (a) { var img = new Image(); img.src = a.getAttribute("href"); });
    });
  }

  /* ---------- Reference filter ---------- */
  var filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-cat]"));
    var buttons = Array.prototype.slice.call(filterBar.querySelectorAll("button"));
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var cat = b.getAttribute("data-filter");
        buttons.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        cards.forEach(function (c) { c.hidden = !(cat === "all" || c.getAttribute("data-cat") === cat); });
      });
    });
  }

})();
