# JavaScript Notes

# Conceitos

## addEventListener()

Escuta eventos do usuário.

### Em um elemento específico

```js
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    console.log("clicou");

});
```

Usar quando o elemento já existe no HTML.

---

### No documento inteiro

```js
document.addEventListener("click", (event) => {

});
```

Usar quando os elementos são criados dinamicamente.

Exemplo:

```js
renderCards();
```

---

## dataset

Lê atributos data-* do HTML.

HTML:

```html
<div data-id="5"></div>
```

JavaScript:

```js

element.dataset.id

```

Resultado:

```js
"5"
```

---

## closest()

Procura o ancestral mais próximo.

HTML:

```html
<div class="api-card">

    <h3>Título</h3>

</div>
```

JavaScript:

```js
event.target.closest(".api-card");
```

Resultado:

```html
<div class="api-card">
```

---

## forEach()

Percorre todos os itens de um array.

```js
items.forEach((item) => {

    console.log(item);

});
```

Não retorna um novo array.

---

## filter()

Cria um novo array com os itens filtrados.

```js
const filtered = items.filter((item) => {

    return item.active;

});
```

Retorna vários resultados.

---

## find()

Retorna apenas o primeiro item encontrado.

```js
const coffee = allCoffees.find((item) => {

    return item.id === id;

});
```

Retorna um único objeto.

---

## localStorage

Salva dados no navegador.

Salvar:

```js
localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
);
```

Ler:

```js
const favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];
```

---

## fetch()

Busca dados de uma API.

```js
const response = await fetch(url);

const data = await response.json();
```

Fluxo:

API
↓
response
↓
json()
↓
array de objetos

---

## return

Para imediatamente a execução da função.

```js

if(
    event.target.classList.contains(
        "remove-favorite-btn"
    )
){
    return;
}

```

Fluxo:

Condição true
↓
return
↓
fim da função


---

# Problemas Resolvidos

## Abrir modal ao clicar no card

Fluxo:

```text
Clique
↓
event.target
↓
closest(".api-card")
↓
dataset.id
↓
getCoffeeById(id)
↓
coffee
↓
modal

Buscar item pelo ID

Problema:

Tenho um array
Quero apenas um item

Solução:

```js

const coffee = getCoffeeById(id);

```
Impedir abertura do modal ao remover favorito

Problema:

Ao clicar em remover
O modal também abria

Solução:

```js

if(
    event.target.classList.contains(
        "remove-favorite-btn"
    )
){
    return;
}
```

---

## Escopo

Variáveis só existem dentro do bloco onde foram criadas.

```js
if(true){

    const id = 1;

}
```

Erro:

```js
console.log(id);
```

Porque id só existe dentro do if.

## Como escolher a ferramenta

Quero um item?
↓
find()

Quero vários itens?
↓
filter()

Quero percorrer todos?
↓
forEach()

Quero pegar data-id?
↓
dataset

Quero encontrar elemento pai?
↓
closest()

Quero reagir a um clique?
↓
addEventListener()

---

## Fluxo que usamos nos cards da API

Clique
↓
event.target
↓
closest(".api-card")
↓
dataset.id
↓
find()
↓
objeto completo
↓
mostrar na tela

---

## Erros que já cometi

```js

const favoriteItems = allCoffees.filter(...)

if(favoriteItems.length === 0)
```

obs.:

Não posso usar favoriteItems antes dele ser criado.

---

## Buscar um item pelo ID

Quando usar?

Tenho um array
Quero apenas 1 item

Ferramenta

```js

find()

Exemplo do projeto Café

const coffee = getCoffeeById(id);
Pegar o ID de um card clicado

Quando usar?

```

---

## Cliquei em um elemento
Preciso saber qual item foi clicado

Ferramenta


dataset.id

HTML

```js

<div data-id="5">

JS

card.dataset.id
Encontrar o card clicado

Quando usar?
```

---

## Cliquei em um botão dentro do card
Preciso encontrar o card pai

Ferramenta

```js

closest()

Exemplo

const card =
    event.target.closest(".api-card");
Impedir que o modal abra

Quando usar?

```

---

## Se uma condição for verdadeira
Parar a execução da função

Ferramenta

```js

return

Exemplo

if(
    event.target.classList.contains(
        "remove-favorite-btn"
    )
){
    return;
}
Salvar favoritos

Quando usar?
```
