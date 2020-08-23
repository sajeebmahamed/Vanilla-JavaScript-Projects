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

            
            // todo:: not working
            remove.addEventListener('click', () => {
                calcArr.pop()
            })

            
        })
    )

valueFromBtn.addEventListener('click', function(e) {
    e.preventDefault()
    const randomValue = document.getElementById('displayPin').value
    const buttonValue = document.getElementById('calcPin').value
    if (Number(randomValue) === Number(buttonValue)) {
        //show success message
        const success = document.getElementById('success')
        const error = document.getElementById('error')
        success.style.display = 'block'
        error.style.display = 'none'
        
        // try message hide 
        const tryMsg = document.querySelector('.action-left')
        tryMsg.style.display = 'none'
    }
    else {
        //show error message
        const error = document.getElementById('error')
        const success = document.getElementById('success')
        error.style.display = 'block'
        success.style.display = 'none'

        // try message show

        const tryMsg = document.querySelector('.action-left')
        tryMsg.style.display = 'block'
        tryMsg.innerHTML = tryMsg.innerHTML - 1 + ' try left'
        

    }
    // clear input value 
    document.getElementById('calcPin').value = ''
    document.getElementById('displayPin').value = ''
    calcArr = []
})

//ToDo: need to work on reset button
