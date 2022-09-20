const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwd_1El = document.getElementById("pwd_1-el")
let pwd_2El = document.getElementById("pwd_2-el")
let sizeErrorEl = document.getElementById("sizeError-el")
let size = 10

function generate(){
    pwd_1El.textContent = " "
    pwd_2El.textContent = " "
    for(let i = 0; i < size; i++){
        pwd_1El.textContent += characters[Math.floor(Math.random() * characters.length)]
        pwd_2El.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}

function getSize(){
    size = document.getElementById("text_field").value
    sizeErrorEl.textContent = ""
    if(size < 20){
        generate()
    }
    else{
        sizeErrorEl.textContent = "Size too large, try lower than 20 characters"
    }
}