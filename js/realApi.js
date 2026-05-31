(() => {

const apiCards = document.getElementById("apiCards");

const favoriteCards = document.getElementById("favoriteCards");

const apiSearch = document.getElementById("apiSearch");

const favoritesTitle = document.getElementById("favoritesTitle");


let allCoffees = [];

const getCoffees = async () => {

    apiCards.innerHTML = `
    
        <p class="loading">
            Carregando cafés...
        </p>
    
    `;

    try {

        await new Promise((resolve) => {

            setTimeout(resolve, 2000);

        });

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=6"
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

            <div class="api-card ${favoriteClass}">

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

// const saveFavorite = (id) => {

//     const favorites =
//         JSON.parse(localStorage.getItem("favorites"))
//         || [];

//     if(favorites.includes(id)){

//         return;

//     }

//     favorites.push(id);

//     localStorage.setItem(
//         "favorites",
//         JSON.stringify(favorites)
//     );

// };

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

    favoritesTitle.textContent =
    `Meus Favoritos (${favorites.length})`;

    const favoriteItems = allCoffees.filter((item) => {

        return favorites.includes(item.id);

    });

    favoriteCards.innerHTML = "";

    favoriteItems.forEach((item) => {

        favoriteCards.innerHTML += `

            <div class="api-card">

                <h3>
                    ${
                        item.title.charAt(0).toUpperCase() +
                        item.title.slice(1)
                    }
                </h3>

                <p>
                    ${item.body.slice(0, 80)}...
                </p>

            </div>

        `;

    });


};

getCoffees();

apiSearch.addEventListener("input", () => {

    const value = apiSearch.value.toLowerCase();

    const filtered = allCoffees.filter((item) => {

        return (
            item.title.toLowerCase().includes(value)
        );

    });

    renderCards(filtered);

});


document.addEventListener("click", (event) => {

    if(event.target.classList.contains("favorite-btn")){

        const id = Number(
            event.target.dataset.id
        );
        
        toggleFavorite(id);
        renderFavorites();
        renderCards(allCoffees);
        
    }
    
});

})();