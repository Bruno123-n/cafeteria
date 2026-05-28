(() => {

const apiCards = document.getElementById("apiCards");

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

            </div>

        `;

    });

};

getCoffees();

})();