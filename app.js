const city = document.querySelector('.location');
const cityDate = document.querySelector('.loc-date');
const input = document.querySelector('#search-input');
const searchBtn = document.querySelector('.search-btn');
const currentTemp = document.querySelector('.current-temp');
const currentAtmosphere = document.querySelector('.atmosphere');
const feels = document.querySelector('.feels');
const humidity = document.querySelector('.humid');
const wind = document.querySelector('.wind');
const currentWeatherIcon = document.querySelector('.current-icon');
const dayOne = document.querySelector('.day1');
const dayTwo = document.querySelector('.day2');
const dayThree = document.querySelector('.day3');
const dayFour = document.querySelector('.day4');
const dayFive = document.querySelector('.day5');
const daySix = document.querySelector('.day6');
const daySeven = document.querySelector('.day7');
const dayOne_icon = document.querySelector('.day1-image');
const dayTwo_icon = document.querySelector('.day2-image');
const dayThree_icon = document.querySelector('.day3-image');
const dayFour_icon = document.querySelector('.day4-image');
const dayFive_icon = document.querySelector('.day5-image');
const daySix_icon = document.querySelector('.day6-image');
const daySeven_icon = document.querySelector('.day7-image');
const tempRangeOne = document.querySelector('.range1');
const tempRangeTwo = document.querySelector('.range2');
const tempRangeThree = document.querySelector('.range3');
const tempRangeFour = document.querySelector('.range4');
const tempRangeFive = document.querySelector('.range5');
const tempRangeSix = document.querySelector('.range6');
const tempRangeSeven = document.querySelector('.range7');
const dayWeatherOne = document.querySelector('.day1-weather');
const dayWeatherTwo = document.querySelector('.day2-weather');
const dayWeatherThree = document.querySelector('.day3-weather');
const dayWeatherFour = document.querySelector('.day4-weather');
const dayWeatherFive = document.querySelector('.day5-weather');
const dayWeatherSix = document.querySelector('.day6-weather');
const dayWeatherSeven = document.querySelector('.day7-weather');
const errorMessage = document.querySelector('.error-message');
const errorDiv = document.querySelector('.error-cont');
const okayBtn = document.getElementById('okay');
const loadingElement = document.querySelector('.loading');
const country = document.querySelector('.country');
const toggleSwitch = document.querySelector('.mode');

const dayImage = document.querySelector('#day-image');
const nightImage = document.querySelector('#night-image');
const dayImage1 = document.querySelector('#day-image1');
const nightImage1 = document.querySelector('#night-image1');
const tempDiv = document.querySelector('.temp');
const infoDiv = document.querySelector('.info');
const cityDiv = document.querySelector('.city-name');
const inputForm = document.querySelector('form');

let isDayMode = true;





function isOnline() {
    return navigator.onLine

}



async function getWeather(){
    
    try {
        loadingElement.style.display = 'block';

        setTimeout(async ()=>{
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=76ac74ae107c46c092d223136230410&q=${input.value}&days=7`, {mode: 'cors'});


        if(!response.ok){
            const errorData = await response.json();
            const errorNote = errorData.error.message
            //console.log(errorData);
            displayErrorMessage(errorNote);

        }else{
            const locData = await response.json();
            //console.log(locData);
            city.textContent = locData.location.name;
            country.textContent = `${locData.location.country} (${locData.location.region})`;
            cityDate.textContent = locData.location.localtime;
            currentTemp.textContent = locData.current.feelslike_c;
            currentAtmosphere.textContent = locData.current.condition.text;
            currentWeatherIcon.src = locData.current.condition.icon;
            feels.textContent = `Feels like: ${locData.current.feelslike_c} °C`;
            humidity.textContent = `Humidity: ${locData.current.humidity} %`;
            wind.textContent = `Wind: ${locData.current.wind_kph} km/h`;

            //seven day forcast
            forecastData = locData.forecast.forecastday;
            //console.log(forecastData);

            dayOne.textContent = forecastData[0].date;
            dayOne_icon.src = forecastData[0].day.condition.icon;
            dayWeatherOne.textContent = forecastData[0].day.condition.text;
            tempRangeOne.textContent = `${forecastData[0].day.maxtemp_c}° - ${forecastData[0].day.mintemp_c}°`;

            dayTwo.textContent = forecastData[1].date;
            dayTwo_icon.src = forecastData[1].day.condition.icon;
            dayWeatherTwo.textContent = forecastData[1].day.condition.text;
            tempRangeTwo.textContent = `${forecastData[1].day.maxtemp_c}° - ${forecastData[1].day.mintemp_c}°`;

            dayThree.textContent = forecastData[2].date;
            dayThree_icon.src = forecastData[2].day.condition.icon;
            dayWeatherThree.textContent = forecastData[2].day.condition.text;
            tempRangeThree.textContent = `${forecastData[2].day.maxtemp_c}° - ${forecastData[2].day.mintemp_c}°`;

        }

            loadingElement.style.display = 'none';
        },2000)
        
    } catch(error){
         console.error("Error: " + error);
         loadingElement.style.display = 'none';

    }

  


    
}

function displayErrorMessage(message){
    //console.log(message);
    errorMessage.textContent = `${message}`;
    errorDiv.style.display= 'block';
}



searchBtn.addEventListener('click', ()=>{
    if(isOnline() && input.value){
        getWeather()
    }else if(isOnline() && !input.value){
        const error = 'Please enter a city';
        displayErrorMessage(error);
    }else{
        const offline = 'Please check your internet connection.'
        displayErrorMessage(offline);
    }

    
})

okayBtn.addEventListener('click', ()=>{
    errorDiv.style.display='none';
    input.value = '';
})

toggleSwitch.addEventListener('click', toggleMode);

function toggleMode(){
    //toggle between images on click of input type checkbox
    if (toggleSwitch.checked === true){
        dayImage.style.display = 'none';
        dayImage1.style.display = 'none';
        // dayImage.classList.add('day-image');
        tempDiv.classList.remove('temp');
        tempDiv.classList.add('tempNight');

        infoDiv.classList.remove('info');
        infoDiv.classList.add('infoNight')
        nightImage.style.display = 'block';
        nightImage1.style.display = 'block';
        

        cityDiv.classList.remove('city-name');
        cityDiv.classList.add('city-nameNight');
        isDayMode = false;


    }
    else{
        dayImage.style.display = 'block';
        dayImage1.style.display = 'block';
        tempDiv.classList.remove('tempNight');
        tempDiv.classList.add('temp');

        infoDiv.classList.remove('infoNight');
        infoDiv.classList.add('info')

        cityDiv.classList.remove('city-nameNight');
        cityDiv.classList.add('city-name');
        nightImage.style.display = 'none';
        nightImage1.style.display = 'none';
        isDayMode = true;

    }

    isDayMode = !isDayMode;
}