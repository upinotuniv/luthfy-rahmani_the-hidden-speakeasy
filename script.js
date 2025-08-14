// modal functions
function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imageSrc;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  modal.focus();
}
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// scroll to top
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) scrollToTopBtn.classList.add("show");
  else scrollToTopBtn.classList.remove("show");
});
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// fade-in animation with IntersectionObserver
const observer = new IntersectionObserver(
  function (entries, obs) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".fade-in-up").forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});
