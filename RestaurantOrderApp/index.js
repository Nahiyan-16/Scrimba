import { menuArray } from "./data"

const menu = document.getElementById('menuContainer')
const modal = document.getElementById('modalContainer')

let isCheckOutHidden = 'hidden'

document.addEventListener('click', function(e){
    if(e.target.dataset.idofitem){
        handleAddBtn(e.target.dataset.idofitem)
    }
    else if(e.target.dataset.removeitem){
        handleRemoveBtn(e.target.dataset.removeitem)
    }
    else if(e.target.dataset.ready){
        handleOrderBtn()
    }
})

function handleAddBtn(id){
    isCheckOutHidden = ""
    menuArray.forEach(function(item){
        if(item.id == id){
            item.bought++
        }
    })
    render()
}

function handleRemoveBtn(id){
    isCheckOutHidden = 'hidden'
    menuArray.forEach(function(item){
        if(item.id == id){
            item.bought--
        }
        if(item.bought > 0) isCheckOutHidden=""
    })
    render()
}

function handleOrderBtn(){
    modal.style.display = "inline"
}

function render(){
    menu.innerHTML = ""

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

   menu.innerHTML += `
   <div class="checkOutContainer ${isCheckOutHidden}"> 
        <div class="checkOutHeader">Your Order</div>
        <div class="checkedItemsContainer" id="allCheckedItems">
        <!-- Checked Items-->
        </div>
        <div class="checkOutPartition"></div>
        <div class="checkOutTotalPriceContainer" id="totalPriceElement">

        </div>
        <div class="checkOutOrderBtnContainer">
            <button id="checkOutOrderBtn" data-ready="${1}">Complete Order</button>
        </div>
   </div>
   `
   const checkOutItems = document.getElementById('allCheckedItems')

   menuArray.forEach(function(item){
        if(item.bought > 0){
            let price = item.bought * item.price
            checkOutItems.innerHTML += `
            <div class="checkOutListContainer"> 
                <div class="checkOutListName">${item.name}</div>
                <div class="checkOutListBought">${item.bought} </div>
                <button class="checkOutListBtn" data-removeitem="${item.id}">remove</button>
                <div class="checkOutListPrice">$${price}</div>
            </div>
            `
        }
   })

   const totalPriceEl = document.getElementById('totalPriceElement')

   let totalPrice = 0
   menuArray.forEach(function(item){
        let price = item.bought * item.price
        totalPrice += price
        totalPriceEl.innerHTML =
            `<div class="checkOutTotalPriceText">Total Price</div>
            <div>$${totalPrice}</div>`
   })


}

document.getElementById('cardInfo').addEventListener('submit', function(e){
    e.preventDefault()
    modal.style.display = "none"
    const consentFormData = new FormData(document.getElementById('cardInfo'))
    const fullName = consentFormData.get('userName')
    menu.innerHTML= `
    <div class="thankYouText">
        Thanks ${fullName}! Your order is on its way!
    </div>
    <div style="text-align: center;">
        <a href="." class="goBack">Click Here to go Back</a>
    <div>
    `
})

render()

