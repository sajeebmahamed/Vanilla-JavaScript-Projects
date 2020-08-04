function digitalClock() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let month = date.getMonth()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let timeFormat = 'AM'
    let year = date.getFullYear()
    
    let day = date.getDay()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDate = date.getDate()
    
    if(hours === 0) {
        hours = 12
    }
    if(hours > 12) {
        hours = hours - 12
        timeFormat = 'PM'
    }

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    // miliSeconds = miliSeconds < 10 ? '0' + miliSeconds : miliSeconds


    let finalTime = `${hours}:${minutes}:${seconds}`
    let dayMonth = `${days[day]}, ${months[month]} ${currentDate}, ${year}`

    document.getElementById('time').innerText = finalTime
    document.querySelector('small').innerText = timeFormat
    document.querySelector('p').innerText = dayMonth
    // setInterval(digitalClock, 1000)
}
setInterval(digitalClock, 0)
