const mainBody = document.getElementById('mainContent')
const mainBodyWL = document.getElementById('watchListMainContainer')
const searchBtn = document.getElementById('searchBarBtn')
const searchInput = document.getElementById('searchBar')
// localStorage.clear('myList')
let myAry = []

document.body.addEventListener('click', e=>{
    if(e.path[3])if(e.path[3].childNodes[1])if(e.path[3].childNodes[1].childNodes[1]){
        if(e.path[3].childNodes[1].childNodes[1].innerText){
            addToWatchList(e.path[3].childNodes[1].childNodes[1].innerText)
        }
    }
})

function addToWatchList(name){
    fetch(`https://www.omdbapi.com/?apikey=c53e7b0e&t=%27${name}%27`)
        .then(res=>res.json())
        .then(data=>{
            if(!localStorage.getItem('myList')){
                localStorage.setItem('myList', data.imdbID)
            }
            else{
                myAry = localStorage.getItem('myList').split(',')
                if(!myAry.includes(data.imdbID)){
                    myAry.push(data.imdbID)
                    localStorage.setItem('myList', myAry)
                }
            }
    })
    
}

searchBtn.addEventListener('click',()=>{
    mainBody.innerHTML = ''
    fetch(`https://www.omdbapi.com/?apikey=c53e7b0e&s=%27${searchInput.value}%27`)
        .then(res => res.json())
        .then(data => {
            if(data.Response == 'True'){
                data.Search.forEach(e => {
                    fetch(`https://www.omdbapi.com/?apikey=c53e7b0e&t=%27${e.Title}%27`)
                    .then(res=>res.json())
                    .then(data2=>renderMovieContent(data2))
                })
            }
            else if(data.Error == 'Too many results.'){
                renderNotFound(1)
            }
            else{
                renderNotFound(0)
            }

        })
})

function renderStart(){
    mainBody.innerHTML=`
    <div class="messageSearchContent">
        <img src='icons/filmIcon.png'>
        <p>Start Exploring</p>
    </div>
    `
}

function renderNotFound(x){
    if(x){ 
        mainBody.innerHTML=`
        <div class="messageSearchContent">
            <p>Try being a little bit more specific</p>
        </div>
        `
    }
    else{
        mainBody.innerHTML=`
        <div class="messageSearchContent">
            <p>Unable to find what you’re looking for.</p>
            <p> Please try another search.</p>
        </div>
        `
    }
}

function renderMovieContent(data){
    mainBody.innerHTML+=`
        <div class='movieContent'>
            <img src='${data.Poster}'>
            <div class='movieDetail'>
                <div class="movieTitle">
                    <h3>${data.Title}</h3>
                    <p>⭐️</p>
                    <p>${data.imdbRating}</p>
                </div>
                <div class='addToWL'>
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <button class="addToWatchlistBtn">
                        <img src="icons/plus.png">
                        <div>Watchlist</div>
                    </button>
                </div>
                <div class="plotContainer">
                    <p>${data.Plot}</p>
                </div>
            </div>
        </div>
    `
}

renderStart()