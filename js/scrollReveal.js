const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100) {

            element.classList.add('active');

        } 

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();