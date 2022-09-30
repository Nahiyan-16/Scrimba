const userName = document.getElementsByClassName("boldUser") 
const desc = document.getElementsByClassName("desc") 
const likes = document.getElementsByClassName("likes") 
const post = document.getElementsByClassName("post") 
const userNameText = document.getElementsByClassName("userNameText") 
const userNameAndLoc = document.getElementsByClassName("userNameAndLoc") 
const avatarArtist = document.getElementsByClassName("avatarArtist")
const icon = document.getElementsByClassName("icon-heart")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for(let i = 0; i < posts.length; i++){
    userName[i].innerHTML = `${posts[i].username}`
    desc[i].innerHTML = ` ${posts[i].comment}`
    likes[i].innerHTML = `${posts[i].likes} likes`
    post[i].src = `${posts[i].post}`
    userNameText[i].innerHTML = `${posts[i].name}`
    userNameAndLoc[i].innerHTML = `${posts[i].location}`
    avatarArtist[i].src = `${posts[i].avatar}`
}

let postLock = [0,0,0]

function updateLike(x){
    if(postLock[x] === 0){
        posts[x].likes += 1
        likes[x].innerHTML = `${posts[x].likes} likes`
        icon[x].style.height = "20px"
        icon[x].src = `images/instagramHeart.png`
        postLock[x]++
    }
    else{
        posts[x].likes -= 1
        likes[x].innerHTML = `${posts[x].likes} likes`
        icon[x].style.height = "23px"
        icon[x].src = `images/icon-heart.png`
        postLock[x]--
    }
}