(() => {

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".item-galeria");

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach((card) => {

        const title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const description = card
            .querySelector("p")
            .textContent
            .toLowerCase();

        if(title.includes(value) || 
            description.includes(value)
        ){

            card.classList.remove("hide");

        } else {

            card.classList.add("hide");

        }

    });

});

})(); 