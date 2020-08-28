const inputValue = document.querySelector('#inputValue')
const inputBtn = document.querySelector('#inputBtn')
const cityy = document.querySelector('#city')
const countryy = document.querySelector('#country')
const temperature = document.querySelector('#temp')
const conditions = document.querySelector('#condition')

inputBtn.addEventListener('click', function() {
    let cityName = inputValue.value

    const KELVIN = 273;
    const key = '1053d13b6de3ce70e4538d2884a8705d'

    let api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
    // console.log(api);

    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const city = data.name
            const country = data.sys.country
            const temp = Math.floor(data.main.temp - KELVIN)
            const condition = data.weather[0].main
            console.log(city, country, temp, condition);
            cityy.innerText = city
            countryy.innerText = country
            temperature.innerText = temp
            conditions.innerText = condition
        })
        
})



