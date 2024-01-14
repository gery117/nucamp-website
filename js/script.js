console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

// when the pause button is clicked, pause the carousel
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})   

const apiKey = process.env.OPEN_WEATHER_API_KEY;
let city = "Beijing";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

async function fetchWeather(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        displayWeather(data);
    }
    catch(error){
        console.log(`There was an error`, error);

    }
}

fetchWeather();

let icon = document.querySelector('#weather-icon');
let temprature = document.querySelector('#weather-temp');
let weatherDiscr = document.querySelector('#weather-description');

function displayWeather(data){
    const image = document.createElement('img');
    image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    image.alt = "weather image";
    icon.appendChild(image);

    temprature.textContent =`${data.main.temp} \u00B0 F`;
    weatherDiscr.textContent = `${data.weather[0].description}`;
}