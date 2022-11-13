const schemes = ['Monochrome', 'Monochrome-Dark', 'Monochrome-Light', 'Analogic', 'Complement', 'Analogic-Complement', 'Triad']
let currScheme = 'Monochrome'
let schemeHex = []

document.getElementById('dropDownContainer').addEventListener('click', () => {
    document.getElementById('dropDownOptions').classList.toggle('onAndOff')
})

document.body.addEventListener('click', (e) => {
    if(e.target.innerText == 'Monochrome') changeScheme(e.target.innerText)
    if(e.target.innerText == 'Monochrome-Dark') changeScheme(e.target.innerText)
    if(e.target.innerText == 'Monochrome-Light') changeScheme(e.target.innerText)
    if(e.target.innerText == 'Analogic') changeScheme(e.target.innerText)
    if(e.target.innerText == 'Complement') changeScheme(e.target.innerText)
    if(e.target.innerText == 'Analogic-Complement') changeScheme(e.target.innerText)
    if(e.target.innerText == 'Triad') changeScheme(e.target.innerText)
})

document.getElementById('getScheme').addEventListener('click', ()=> {
    const color = document.getElementById('colorInput').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1,color.length)}&mode=${currScheme.toLowerCase()}`).then(
        res=>res.json()
    ).then(
        data=>renderColors(data.colors)
    )
})

function changeScheme(scheme){
    currScheme = scheme
    renderDropDown()
}  

function renderFooter(){
    let html = ``
    schemeHex.forEach(e => {
        html += `
        <div class='footerHex'>${e}</div>
        `
    })
    schemeHex = []
    document.getElementById('addFooterHex').innerHTML = html
}

function renderColors(color){
    let html = ''
    color.forEach((e)=>{
        schemeHex.push(e.hex.value)
        html += `
            <div class="bodyColors" style="background-color: ${e.hex.value};"></div>
        `
    })
    document.getElementById('addBodyColors').innerHTML = html
    renderFooter()
}

function renderDropDown(){
    let html = ''
    let checkMark = 'checkMark'
    schemes.forEach(e => {
        e==currScheme?checkMark='':checkMark='checkMark'
        html += `
            <div class="dropDownScheme">
                <div class="addSpaceScheme">${e}</div>
                <div class="${checkMark}">✓</div>
            </div>`
    })
    document.getElementById('currentScheme').textContent = currScheme
    document.getElementById('dropDownOptions').innerHTML = html
}

renderDropDown()