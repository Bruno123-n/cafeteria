# JavaScript Notes

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
