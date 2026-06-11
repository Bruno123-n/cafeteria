(() => {
const sortAZ = document.getElementById("sortAZ");

const sortZA = document.getElementById("sortZA");

const prevPage = document.getElementById("prevPage");

const nextPage = document.getElementById("nextPage");

const pageInfo = document.getElementById("pageInfo");

const coffeeTitle = document.getElementById("coffeeTitle");

const toast = document.getElementById("toast");

const coffeeBody = document.getElementById("coffeeBody");

const coffeeModal = document.getElementById("coffeeModal"); 

const closeCoffeeModal = document.getElementById("closeCoffeeModal");
   
const apiCards = document.getElementById("apiCards");

const favoriteCards = document.getElementById("favoriteCards");

const apiSearch = document.getElementById("apiSearch");

const favoritesTitle = document.getElementById("favoritesTitle");



sortAZ.addEventListener("click", () => {

    allCoffees.sort((a, b) => {

        return a.title.localeCompare(
            b.title
        );

    });

    renderCards(allCoffees);

    sortAZ.classList.add("active-sort");

    sortZA.classList.remove("active-sort");

    showToast(
        "☕ Cafés ordenados de A-Z"
    );

});

sortZA.addEventListener("click", () => {

    allCoffees.sort((a, b) => {

        return b.title.localeCompare(
            a.title
        );

    });

    renderCards(allCoffees);

    sortZA.classList.add("active-sort");

    sortAZ .classList.remove("active-sort");

    showToast(
        "☕ Cafés ordenados de Z-A"
    );

});


let currentPage = 1;

nextPage.addEventListener("click", () => {

    currentPage++;

    getCoffees(currentPage);
    // console.log(currentPage);
    // console.log(allCoffees);

    updatePaginationButtons()
    
});

prevPage.addEventListener("click", () => {

    if(currentPage > 1){

        currentPage--;

        getCoffees(currentPage);
        // console.log(currentPage);
        // console.log(allCoffees);
        

        updatePaginationButtons()
        
    }

});

function updatePaginationButtons() {

    const limit = 6;

    const totalPages =
        Math.ceil(100 / limit);


    prevPage.disabled =
        currentPage === 1;

    nextPage.disabled =
        currentPage === totalPages;
    

}

function showToast(message){

    toast.textContent = message;

    toast.classList.add("active");

    setTimeout(() => {

        toast.classList.remove("active")
        

    }, 1000);

}

//"⭐ Café favoritado"

function openCoffeeModal(coffee){

    coffeeModal.classList.add("active");
    coffeeTitle.textContent = coffee.title;
    coffeeBody.textContent = coffee.body;

}

function closeCoffeeModalFunction(){

    coffeeModal.classList.remove("active");
    

}

closeCoffeeModal.addEventListener(
    "click",
    closeCoffeeModalFunction
);

coffeeModal.addEventListener("click", (event) => {

    if(event.target === coffeeModal){

       closeCoffeeModalFunction()

    }

});

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        closeCoffeeModalFunction()

    }

});


let allCoffees = [];

const getCoffees = async (page) => {

    
    const limit = 6;

    const start = (page - 1) * limit;

    // console.log(page);
    // console.log(start);
    pageInfo.textContent = `Página ${page}`;
    
    
    apiCards.innerHTML = `
    
        <p class="loading">
            Carregando cafés...
        </p>
    
    `;

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
        );

        if(!response.ok){

            throw new Error("Erro ao buscar dados");

        }

        const data = await response.json();

        allCoffees = data;

        renderCards(data);

        renderFavorites();

    } catch(error){

        apiCards.innerHTML = `
        
            <p class="error">
                Não foi possível carregar os cafés.
            </p>
        
        `;

        console.log(error);

    }

};

const renderCards = (items) => {

    apiCards.innerHTML = "";

    const favorites = JSON.parse(localStorage.getItem("favorites"))
        || [];

    items.forEach((item) => {

        const isFavorite = favorites.includes(item.id);
        const buttonText =
            isFavorite
                ? "⭐ Favoritado"
                : "☆ Favoritar";
        const favoriteClass =
            isFavorite
                ? "favorite"
                : "";


        apiCards.innerHTML += `

            <div 
                class="api-card ${favoriteClass}"
                data-id="${item.id}"
            >

                <h3>
                    ${
                        item.title.charAt(0).toUpperCase() +
                        item.title.slice(1)
                    }
                </h3>

                <p>
                    ${item.body.slice(0, 80)}...
                </p>

                <button
                    class="favorite-btn"    
                    data-id="${item.id}"
                >
                    ${buttonText}
                </button>

            </div>

        `;

    });

};

const  getCoffeeById = (id) => {

    const coffee = allCoffees.find((item) => {

        return item.id === id;

    });

    return coffee;

};

const toggleFavorite = (id) => {

    let favorites =
        JSON.parse(localStorage.getItem("favorites"))
        || [];

    if(favorites.includes(id)){

        // remover
        favorites = favorites.filter((numero) => {

        return numero !== id})

    } else {

        // adicionar
        favorites.push(id);

    }


    localStorage.setItem("favorites", JSON.stringify(favorites));

}

const renderFavorites = () => {

    const favorites =
        JSON.parse(localStorage.getItem("favorites"))
        || [];

        
    const favoriteItems = allCoffees.filter((item) => {
        
        return favorites.includes(item.id);
        
    });
    favoritesTitle.textContent =
        `Meus Favoritos (${favorites.length})`;
    
    if ( favoriteItems.length === 0 ) {
 
        favoriteCards.innerHTML = `
            <p>
                Nenhum favorito encontrado ☕
            </p>
        `;

        return;
    }

    favoriteCards.innerHTML = "";

    favoriteItems.forEach((item) => {

        favoriteCards.innerHTML += `

            <div
                class="api-card"
                data-id="${item.id}"
            >

                <h3>
                    ${
                        item.title.charAt(0).toUpperCase() +
                        item.title.slice(1)
                    }
                </h3>

                <p>
                    ${item.body.slice(0, 80)}...
                </p>

                <button
                    class="remove-favorite-btn"
                    data-id="${item.id}"
                >
                    ❌ Remover
                </button>

            </div>

        `;

    });

};

getCoffees(currentPage);
updatePaginationButtons()


apiSearch.addEventListener("input", () => {

    const value = apiSearch.value.toLowerCase();

    const filtered = allCoffees.filter((item) => {

        return (
            item.title.toLowerCase().includes(value)
        );

    });

    if(filtered.length === 0){

        apiCards.innerHTML = `
            <p>
                Nenhum café encontrado ☕
            </p>
        `;

        return;

    }

    renderCards(filtered);

});


document.addEventListener("click", (event) => {

    if(event.target.classList.contains("favorite-btn")){

        const id = Number(
            event.target.dataset.id
        );

        toggleFavorite(id);
        showToast("⭐ Café favoritado")
        renderFavorites();
        renderCards(allCoffees);
        
    }
    
});

document.addEventListener("click", (event) => {

    if(event.target.classList.contains("remove-favorite-btn")){

        const id = Number(
            event.target.dataset.id
        );
        
        toggleFavorite(id);
        showToast("❌ Café removido");
        renderFavorites();
        renderCards(allCoffees);
        
    }
    
});

document.addEventListener("click", (event) => {

    if(
        event.target.classList.contains(
            "remove-favorite-btn"
        )
    ){
        return;
    }

    const card =
        event.target.closest(".api-card");

    if(card){

        const id = Number(
            card.dataset.id
        );

        // console.log(id);

        const coffee = getCoffeeById(id);
        openCoffeeModal(coffee);

        // console.log(coffee);
        // console.log(coffee.title);
        // console.log(coffee.body);
    }

});


})();