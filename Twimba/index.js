import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }
    else if(e.target.dataset.comment){
        handleCommentBtnClick(e.target.dataset.comment)
    }
    else if(e.target.dataset.deleted){
        handleDeleteBtnClick(e.target.dataset.deleted)
    }
})
 
function handleLikeClick(tweetId){ 
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++ 
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render() 
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input')
    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    render()
    tweetInput.value = ''
    }

}

function handleCommentBtnClick(tweetId){
    const comment = document.getElementById('replyInputArea').value
    if(comment){
            tweetsData.forEach(function(tweet){
                if(tweet.uuid === tweetId){
                    let tweetBody = {
                        handle: "@Scrimba",
                        profilePic: "images/scrimbalogo.png",
                        tweetText: comment
                    }
                    tweet.replies.unshift(tweetBody)
                }
            })
        render()
        document.getElementById(`replies-${tweetId}`).classList.toggle('hidden')
    }
}

function handleDeleteBtnClick(deleteId){
    let posIndex = tweetsData.findIndex(function(tweet){
        return tweet.uuid === deleteId
    })
    tweetsData.splice(posIndex, 1)
    render()
}

function getFeedHtml(){
    let feedHtml = ``
    
    tweetsData.forEach(function(tweet){
        let deleteIcon = 'hidden'
        if(tweet.handle === "@Scrimba"){
            deleteIcon = ''
        }
        
        let likeIconClass = ''
        if (tweet.isLiked)likeIconClass = 'liked'
        
        let retweetIconClass = ''
        if (tweet.isRetweeted)retweetIconClass = 'retweeted'
        
        let repliesHtml = ''
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
        <div class="tweet-reply">
            <div class="tweet-inner">
                <img src="${reply.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${reply.handle}</p>
                        <p class="tweet-text">${reply.tweetText}</p>
                    </div>
                </div>
        </div>
        `
            })
        }
        
        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots allIcons"
                            data-reply="${tweet.uuid}"
                            ></i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likeIconClass} allIcons"
                            data-like="${tweet.uuid}"
                            ></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetIconClass} allIcons"
                            data-retweet="${tweet.uuid}"
                            ></i>
                            ${tweet.retweets}
                        </span>
                        <span class="${deleteIcon}">
                            <i class="fa-solid fa-trash allIcons"
                            data-deleted="${tweet.uuid}"
                            ></i>
                        </span>
                    </div>   
                </div>            
            </div>
            <div class="commentSection">
                <textarea placeholder="Comment" id="replyInputArea"></textarea>
                <i class="fa-solid fa-share replyInputBtn"
                data-comment="${tweet.uuid}"
                ></i>
            </div>
            <div class="hidden" id="replies-${tweet.uuid}">
                ${repliesHtml}
            </div>   
        </div>
        `
   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
