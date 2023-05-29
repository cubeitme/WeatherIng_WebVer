// Get vars from html

let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name')
let temp_now = document.querySelector('.temp_now')
let temp_max_min = document.querySelector('.temp_max_min')
let temp_feels = document.querySelector('.temp_feels')
let desc = document.querySelector('.desc')
let WIcon = document.querySelector('.weather_icon')

button.addEventListener('click', function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputvalue.value + "&units=metric&lang=ru&appid=56b211a124e9b0a95c416d33a34abbaf")
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Место "' + inputvalue.value + '" не найдено'))
})

const displayData =(weather)=> {
    temp_now.innerText = weather.main.temp
    temp_max_min.innerText = "🠕 " + weather.main.temp_max + " / 🠗 " + weather.main.temp_min
    temp_feels.innerText = "Ощущается как: " + weather.main.feels_like
    desc.innerText = weather.weather[0].description
    console.log(weather)
}