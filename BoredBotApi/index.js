document.getElementById('btn').addEventListener('click', getFetch)

function getFetch(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => setActivityHtml(data.activity))
}

function setActivityHtml(activity){
    document.getElementById('activity').innerHTML = `
        ${activity}
    `
}