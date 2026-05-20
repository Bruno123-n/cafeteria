(() => {


const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll("nav a");

function closeMenu(){

    menuToggle.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");

}

function openMenu(){

    menuToggle.classList.add("active");
    menu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");

}


menuToggle.addEventListener("click", () => {
    
    if(menu.classList.contains("active")){

        closeMenu();

    }else{

        openMenu();
        
    }
});

overlay.addEventListener("click", closeMenu);


navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        closeMenu()

    }

});

})();

