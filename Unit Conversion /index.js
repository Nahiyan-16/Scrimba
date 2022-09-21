let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn-el")
let massEl = document.getElementById("mass-el")
let volumeEl = document.getElementById("volume-el")
let lengthEl = document.getElementById("length-el")
let errorEl = document.getElementById("error-el")
let allEl = [massEl, volumeEl, lengthEl]
let conversions = []

inputBtn.addEventListener('click', function(){
    resetAll()
    render(inputEl.value)
})

inputEl.addEventListener("click", function(){
    inputEl.value = ""
})

function resetAll(){
    conversions = []
    for (let i = 0; i < 3; i ++){
        allEl[i].innerHTML = " "
    }
    errorEl.textContent = " "
}

function render(num){
    if(num > 0 && num < 9999999){
        loadConversions(num)
        for (let i = 0; i < allEl.length; i++){
        allEl[i].innerHTML = conversions[i]
        }
    }
    else {
        errorEl.textContent = "Error! Number is too large or not greater than zero"
    }
}

function loadConversions(num){
    let kilo = calculate(num, "Mass", "Kilo").toFixed(2)
    let pound = calculate(num, "Mass", "Pound").toFixed(2)
    let liter = calculate(num, "Volume", "Liter").toFixed(2)
    let gallon = calculate(num, "Volume", "Gallon").toFixed(2)
    let meter = calculate(num, "Length", "Meter").toFixed(2)
    let feet = calculate(num, "Length", "Feet").toFixed(2)

    conversions.push(`${num} meters = ${feet} feet |
    ${num} feet = ${meter} meters`)
    conversions.push(`${num} liters = ${gallon} gallons |
    ${num} gallons = ${liter} liters`)
    conversions.push(`${num} kilos = ${pound} pounds |
    ${num} pounds = ${kilo} kilos`)
}

function calculate(x, y, z){
    if(y === "Mass"){
        if(z === "Kilo"){return x * 0.45}
        else {return x * 2.20}
    }
    else if(y === "Volume"){
        if(z === "Liter"){return x * 3.78}
        else {return x * 0.26}
    }
    else {
        if(z === "Meter"){return x * 0.30}
        else {return x * 3.28}
    }
}