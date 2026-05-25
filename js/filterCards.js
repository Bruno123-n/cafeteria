(() => {

const buttons = document.querySelectorAll(".filtro-btn");

const cards = document.querySelectorAll(".item-galeria");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        cards.forEach((card) => {

            const category = card.dataset.category;

            if(filter === "all" || filter === category){

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});

})();