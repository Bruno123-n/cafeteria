(() => {

const apiCards = document.getElementById("apiCards");

const apiSearch = document.getElementById("apiSearch");

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

    items.forEach((item) => {

        apiCards.innerHTML += `

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

                <button
                    class="favorite-btn"
                    data-id="${item.id}"
                >
                    ⭐ Favoritar
                </button>

            </div>

        `;

    });

};

const saveFavorite = (id) => {

    const favorites =
        JSON.parse(localStorage.getItem("favorites"))
        || [];

    if(favorites.includes(id)){

        return;

    }

    favorites.push(id);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

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
        
        saveFavorite(id);
        
    }
    
});

})();