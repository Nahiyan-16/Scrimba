const WLContainer = document.getElementById('watchListMainContainer')

let myList = []

// localStorage.clear('myList')

document.body.addEventListener('click', e=>{
    if(e.path[3])if(e.path[3].childNodes[1])if(e.path[3].childNodes[1].childNodes[1]){
        if(e.path[3].childNodes[1].childNodes[1].innerText){
            removeFromWatchList(e.path[3].childNodes[1].childNodes[1].innerText)
        }
    }
})

function removeFromWatchList(name){
    fetch(`https://www.omdbapi.com/?apikey=c53e7b0e&t=%27${name}%27`)
        .then(res=>res.json())
        .then(data=>{
            myList = myList.filter(e=>e!==data.imdbID)
            localStorage.setItem('myList', myList)
            WLContainer.innerHTML = ''
            getLocalData()
        })
}

function getLocalData(){
    if(localStorage.getItem('myList')){
        myList = localStorage.getItem('myList').split(',')
        myList.reverse()
    }
    else{
        renderEmpty()
    }
    myList.forEach(e=>{
        getMovieData(e)
    })
}

async function getMovieData(e){
    const res = await fetch(`https://www.omdbapi.com/?apikey=c53e7b0e&i=${e}`)
    const data = await res.json()
    renderMovieContent(data)
}

function renderMovieContent(data){
    WLContainer.style.height = ''
    WLContainer.innerHTML+=`
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
                <button class="removeToWatchlistBtn">
                    <img src="icons/minus.png">
                    <div>Remove</div>
                </button>
            </div>
            <div class="plotContainer">
                <p>${data.Plot}</p>
            </div>
        </div>
    </div>
`
}

function renderEmpty(){
    WLContainer.style.height= '60vh'
    WLContainer.innerHTML =`
    <div class='emptyWL'>
        <p><a href='searchPage.html'>Let's go and add something!</a></p>
    </div>
    `
}

getLocalData()