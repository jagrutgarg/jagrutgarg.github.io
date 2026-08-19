document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal-on-scroll for any element with class "reveal". Elements are
  // visible by default (no-JS safe). Only elements confirmed off-screen
  // on the observer's first callback get hidden-then-fade-in treatment,
  // so anything already in the initial viewport never flashes invisible.
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && !reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          } else if (!el.classList.contains("reveal-armed")) {
            el.classList.add("reveal-armed");
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // 3D pointer-tilt effect for the hero card.
  var tiltCard = document.querySelector(".tilt-card");
  if (tiltCard && !reduceMotion && window.matchMedia("(hover: hover)").matches) {
    var scene = tiltCard.closest(".tilt-scene") || tiltCard;
    scene.addEventListener("mousemove", function (e) {
      var rect = tiltCard.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var rotateY = x * 24;
      var rotateX = y * -24;
      tiltCard.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    });
    scene.addEventListener("mouseleave", function () {
      tiltCard.style.transform = "rotateX(8deg) rotateY(-10deg)";
    });
  }
});
