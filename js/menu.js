const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll("nav a");


menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.add("no-scroll")
});

overlay.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll")
});


navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        menu.classList.remove("active");
        document.body.classList.remove("no-scroll")
  });
});


