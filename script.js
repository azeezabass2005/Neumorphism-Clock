setInterval(() => {
    let secondsIndicator = document.querySelector('.seconds-indicator')
    let minutesIndicator = document.querySelector('.minutes-indicator')
    let hourIndicator = document.querySelector('.hour-indicator')

    let svgSec = document.querySelector('.svg-sec')
    let svgMin = document.querySelector('.svg-min')
    let svgHour = document.querySelector('.svg-hour')
    let hoursDiv = document.querySelector('.hourbox')
    let minutesDiv = document.querySelector('.minutebox')
    let secondsDiv = document.querySelector('.secondsbox')
    let amPmDiv = document.querySelector('.am-pm')

    let currentHour = new Date().getHours()
    let currentMinute = new Date().getMinutes()
    let currentSeconds = new Date().getSeconds()
    // Check whether the time is in AM or PM and dynamically get it into the html
    let currentAmOrPm = currentHour >= 12 ? 'PM' : 'AM'
    amPmDiv.innerHTML = currentAmOrPm

    currentHour > 12 ? currentHour = currentHour - 12 : currentHour = currentHour

    //Make the digits to two digit when the numbers are single
    currentHour = (currentHour < 10) ? '0' + currentHour : currentHour
    currentMinute = (currentMinute < 10) ? '0' + currentMinute : currentMinute
    currentSeconds = (currentSeconds < 10) ? '0' + currentSeconds : currentSeconds

    hoursDiv.innerHTML = currentHour
    minutesDiv.innerHTML = currentMinute
    secondsDiv.innerHTML = currentSeconds

    svgHour.style.strokeDashoffset = 255 - (255 * currentHour) / 12
    svgMin.style.strokeDashoffset = 315 - (315 * currentMinute) / 60
    svgSec.style.strokeDashoffset = 380 - (380 * currentSeconds) / 60

    secondsIndicator.style.transform = `rotateZ(${currentSeconds * 6}deg)`
    minutesIndicator.style.transform = `rotateZ(${currentMinute * 6}deg)`
    hourIndicator.style.transform = `rotateZ(${currentHour * 30}deg)`
    

}, 1000)

// Change the theme

// const body = document.quertSelector('body'),
//     modeChanger = document.querySelector('.white-black')

// modeChanger.addEventListener('click', () => {
//     modeChanger.classList.toggle('active')
//     body.classList.toggle('dark')
//     // if(!body.classList.containe('dark')) {
//     //     localStorage.setItem('mode', 'light-mode')
//     // }
//     // else {
//     //     localStorage.setItem('mode', 'dark-mode')
//     // }
// })

const body = document.querySelector('body')
const themeButton = document.querySelector('.white-black')
const themeText = document.querySelector('.theme-changer')
themeText.innerHTML = 'W'

let currentTheme = 'white'

const changeTheme = () => {
    if(currentTheme === 'white') {
        currentTheme = 'black'
    }else {
        currentTheme = 'white'       
    }
    if(currentTheme === 'black') {
        body.classList.add('dark')
        themeText.innerHTML = 'B'
    }
    else {
        body.classList.remove('dark')
        themeText.innerHTML = 'W'
    }
}

themeButton.addEventListener('click', changeTheme)

