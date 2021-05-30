const generateBtn = document.getElementById('generate')
const resetBtn = document.getElementById('reset')
const target = document.getElementById('target')
const dataOrigin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '$', '!', '%', '*', '?']

// console.log(dataOrigin)

// Math.floor(Math.random() * (max - min) ) + min;

let password = document.createElement('p')
let letterQuery = []
function PasswordGenerator() {
    if(letterQuery.length > 0) {
        return
    } else {
        for(let i=0; i < Math.floor(Math.random() * (20 - 5) ) + 5; i++) {
            let passwordIndex = Math.floor(Math.random() * (dataOrigin.length - 1) ) + 1
            let passwordLetter = dataOrigin[passwordIndex]
            letterQuery.push(passwordLetter)
            password.innerText = `${letterQuery.join('')}`
        }
        target.appendChild(password)  
    }
}
generateBtn.addEventListener('click', PasswordGenerator)
resetBtn.addEventListener('click', () => {
    password.innerText = ''
    letterQuery = []
})