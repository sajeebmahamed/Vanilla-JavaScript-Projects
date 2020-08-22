const generatePin = document.querySelector('.generate-btn')
const displayPin = document.getElementById('displayPin')
const valueFromBtn = document.getElementById('calcBtn')
generatePin.addEventListener('click', function(e) {
    e.preventDefault()
    let pin = Math.random().toFixed(3)*1000
    displayPin.value = Number(pin)
})

const calcBtn = document.querySelectorAll('.button')
let calcArr = []

calcBtn.forEach(single => 
        single.addEventListener('click', function(e) {
            e.preventDefault()
            let res = single.innerHTML
            calcArr.push(res)
            let final = document.getElementById('calcPin').value = [...calcArr].join('')
        })
        
    )

valueFromBtn.addEventListener('click', function(e) {
    e.preventDefault()
    const randomValue = document.getElementById('displayPin').value
    const buttonValue = document.getElementById('calcPin').value
    if (Number(randomValue) === Number(buttonValue)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
})

//ToDo: need to work on reset button