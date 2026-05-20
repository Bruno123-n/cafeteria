(() => {


const openModal = document.getElementById("reservar");

const closeModal = document.getElementById("closeModal");

const modal = document.getElementById("modal");

const nome = document.getElementById("nome");

const telefone = document.getElementById("telefone");

const formReserva = document.getElementById("formReserva");

const mensagemErro = document.getElementById("mensagemErro");

const menu = document.getElementById("menu");







function openModalFunction(){

    modal.classList.add("active");

    document.body.classList.add("no-scroll");

}



function closeModalFunction(){

    modal.classList.remove("active");

    document.body.classList.remove("no-scroll");

}

openModal.addEventListener("click", openModalFunction);


closeModal.addEventListener("click", closeModalFunction);


modal.addEventListener("click", (event) => {

    if(event.target === modal){

       closeModalFunction()

    }

});

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        closeModalFunction()

    }

});

setTimeout(() => {

    if(!menu.classList.contains("active")){
        openModalFunction();
    }

}, 5000);

formReserva.addEventListener("submit", (event) => {

    event.preventDefault();

    mensagemErro.textContent = "";

    if(nome.value === "" || telefone.value === ""){

        mensagemErro.textContent = "Preencha todos os campos";

        return;

    }


    const mensagem = `Olá, meu nome é ${nome.value} e gostaria de fazer uma reserva. Meu telefone é ${telefone.value}`;


    const numero = "5547997688933";


    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;


    window.open(url, "_blank");

    nome.value = "";

    telefone.value = "";

    closeModalFunction();

});

})();
