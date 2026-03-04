// ─── Scroll fade-in ───────────────────────────────────────────

const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
  { threshold: 0.1 }
);

document.querySelectorAll('section').forEach(s => {
  s.classList.add('fade-section');
  observer.observe(s);
});
