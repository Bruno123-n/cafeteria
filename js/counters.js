(() => {

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.dataset.target;

    let current = 0;

    const increment = target / 100;
    

    const updateCounter = () => {

        current += increment;

        if(current < target){

            counter.textContent = Math.floor(current);

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target;

        }

    };

    updateCounter();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach((counter) => {
    observer.observe(counter);
});

})();