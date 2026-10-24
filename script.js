/* Mitchell sample preview - progressive enhancement only.
   Content is fully visible if this file never runs. */
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('has-reveal');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

  Array.prototype.forEach.call(els, function (el) { io.observe(el); });

  // Safety net: if anything stays hidden after 3s, show it.
  window.setTimeout(function () {
    Array.prototype.forEach.call(els, function (el) { el.classList.add('in'); });
  }, 3000);
})();
