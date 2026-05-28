(() => {

const apiCards = document.getElementById("apiCards");

const cafes = [
    {
        name: "Capuccino Cremoso",
        description: "Espuma cremosa e sabor intenso."
    },

    {
        name: "Expresso Premium",
        description: "Grãos selecionados artesanalmente."
    },

    {
        name: "Mocha Especial",
        description: "Chocolate belga com café premium."
    }
];

const renderCards = () => {

    cafes.forEach((cafe) => {

        apiCards.innerHTML += `
        
            <div class="api-card">

                <h3>${cafe.name}</h3>

                <p>${cafe.description}</p>

            </div>
        
        `;

    });

};

renderCards();

})();