const result = document.querySelector('#result')
const submit = document.querySelector('#submit')

function binary(event) {
    event.preventDefault();
    const number = document.querySelector('#number').value
    if(number === '') {
        alert('Please enter a valid number')
    }else if(number < 0) {
        alert('Number a must be a positive value')
    }else {
        result.style.visibility = 'visible'
    }
    binaryNumber = Number(number).toString(2)
    result.innerText = binaryNumber
}
submit.addEventListener('click', binary)
