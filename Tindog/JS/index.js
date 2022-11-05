import { dogsData } from "./data.js"
import { Dog } from "./Dog.js"

function getMainContent (data){
    return `<div class="mainContent">
                <h3>${data.name}, ${data.age}</h3>
                <p>${data.bio}</p>
            </div>`
}

document.getElementById('mainContentContainer').style.backgroundImage = `url('../${dogsData[0].avatar}')`
document.getElementById('mainContentContainer').innerHTML = getMainContent(dogsData[0])



