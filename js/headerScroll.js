const header = document.querySelector('header');

window.addEventListener('scroll', () => {

        if(window.scrollY > 50) {

            header.classList.add('scrolled');

        } else {

            header.classList.remove('scrolled');

        }

    }
);


(() => {

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // topo da página
    if(currentScroll <= 0){
        header.classList.remove("hide");
        return;
    }

    // descendo
    if(currentScroll > lastScroll){

        header.classList.add("hide");

    } else {

        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

})();