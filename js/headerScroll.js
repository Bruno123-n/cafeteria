const header = document.querySelector('header');

window.addEventListener('scroll', () => {

        if(window.scrollY > 50) {

            header.classList.add('scrolled');

        } else {

            header.classList.remove('scrolled');

        }

    }
);


let lastScroll = 0;

window.addEventListener("scroll", () => {

  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {

    header.classList.add("hide");

  } else {

    header.classList.remove("hide");

  }

  lastScroll = currentScroll;

});