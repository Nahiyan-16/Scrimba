import { dogsData } from "./data.js"
import { Dog } from "./Dog.js"

let dogs = dogsData.map((e) => e)
let isWaiting = false

document.getElementById('crossBtn').addEventListener('click', function(){
    if(!isWaiting){
        isWaiting = true
        myDog.isNotLiked()
        document.getElementById('badge').style.backgroundImage = 'url("../images/badge-nope.png")'
        setTimeout(()=>{
            myDog = getNewDog()
            render()
            isWaiting = false
        }, 1500)
    }
})

document.getElementById('heartBtn').addEventListener('click', function(){
    if(!isWaiting){
        isWaiting = true
        myDog.isLiked()
        document.getElementById('badge').style.backgroundImage = 'url("../images/badge-like.png")'
        setTimeout(()=>{
            myDog = getNewDog()
            render()
            isWaiting = false
        }, 1500)
    }
})

function getMainContent (data){
    return `<div class="mainContent">
                <div id="badge"></div>
                <h3>${data.name}, ${data.age}</h3>
                <p>${data.bio}</p>
            </div>`
}

function getNewDog(){
    if(dogs.length > 0){
        return new Dog(dogs.shift())
    }
    else{
        dogs = dogsData.map((e) => e)
        return new Dog(dogs.shift())
    }
}

function render(){
    document.getElementById('mainContentContainer').style.backgroundImage = `url('../${myDog.avatar}')`
    document.getElementById('mainContentContainer').innerHTML = getMainContent(myDog)
}

let myDog = getNewDog()

render()

