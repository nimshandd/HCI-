AOS.init();
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
  speed: 400
});

new Typed("#typed-text", {
  strings: ["Crafting the Future of Web Design", "Creating Immersive Experiences", "Bringing Neon Visions to Life"],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true
});

window.onscroll = function() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  scrollBtn.style.display = window.pageYOffset > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
