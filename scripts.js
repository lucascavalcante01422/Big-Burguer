const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function showAll(productsArray){
    let productsList = ``
    productsArray.forEach(burguer => {
        productsList += `
    <li>
        <img src=${burguer.src}>
        <p class="burger-name">${burguer.name}</p>
        <p class="price">R$ ${burguer.price.toFixed(2)}</p>
    </li>
    `

    });

    list.innerHTML = productsList
}

function mapAllItems() {
    const newPrices = menuOptions.map(product =>({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}

function sumAllItems(){
    const value = menuOptions.reduce((acc, current) => acc + current.price, 0 )

    list.innerHTML = `
    <li>
        <p>O valor de todos os produtos somados é de R$ ${value}</p>
    </li>
    `
    
}

function filterVegan() {
    const veganBurguer = menuOptions.filter((product) => product.vegan)
    showAll(veganBurguer)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterVegan)