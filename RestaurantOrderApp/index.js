// import { menuArray } from "./data"

//DELETE
const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushroom", "mozzarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]
//DELETE
const menu = document.getElementById('menuContainer')

document.addEventListener('click', function(e){
    console.log(e.target.dataset.idofitem)
})

function render(){
    menuArray.forEach(function(item){
        menu.innerHTML += `
        <div class="itemContainer">
            <div class="Emoji">${item.emoji}</div>
            <div class="itemDetails">
                <div class="itemName">${item.name}</div>
                <div class="itemIngredients">${item.ingredients}</div>
                <div class="itemPrice">$${item.price}</div>
            </div>
            <div>
                <button class="addBtn" data-idOfItem="${item.id}">+</button>
            </div>
        </div>
        <div class="bottomBorder"></div>
        `
    })
   
}

render()