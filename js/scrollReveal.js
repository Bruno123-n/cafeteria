window.addEventListener("scroll", revealOnScroll);

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    const triggerPoint = windowHeight * 0.85;

    if (elementTop < triggerPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

let scrolling = false;

window.addEventListener("scroll", () => {
  if (!scrolling) {
    window.requestAnimationFrame(() => {
      revealOnScroll();
      scrolling = false;
    });

    scrolling = true;
  }
});