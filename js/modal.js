const openModal = document.getElementById("reservar");

const closeModal = document.getElementById("closeModal");

const modal = document.getElementById("modal");


openModal.addEventListener("click", () => {

    modal.classList.add("active");
});


closeModal.addEventListener("click", () => {

    modal.classList.remove("active");
});


modal.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.classList.remove("active");

    }

});