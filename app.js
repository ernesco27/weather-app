const city = document.querySelector('.location');
const cityDate = document.querySelector('.loc-date');
const input = document.querySelector('input');
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







async function getWeather(){
    
    try {
        loadingElement.style.display = 'block';

        setTimeout(async ()=>{
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=76ac74ae107c46c092d223136230410&q=${input.value}&days=7`, {mode: 'cors'});


        if(!response.ok){
            const errorData = await response.json();
            const errorNote = errorData.error.message
            displayErrorMessage(errorNote);

        }else{
            const locData = await response.json();
            console.log(locData);
            city.textContent = locData.location.name;
            cityDate.textContent = locData.location.localtime;
            currentTemp.textContent = locData.current.feelslike_c;
            currentAtmosphere.textContent = locData.current.condition.text;
            currentWeatherIcon.src = locData.current.condition.icon;
            feels.textContent = `Feels like: ${locData.current.feelslike_c} °C`;
            humidity.textContent = `Humidity: ${locData.current.humidity} %`;
            wind.textContent = `Wind: ${locData.current.wind_kph} km/h`;

            //seven day forcast
            forecastData = locData.forecast.forecastday;
            console.log(forecastData);

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

            dayFour.textContent = forecastData[3].date;
            dayFour_icon.src = forecastData[3].day.condition.icon;
            dayWeatherFour.textContent = forecastData[3].day.condition.text;
            tempRangeFour.textContent = `${forecastData[3].day.maxtemp_c}° - ${forecastData[3].day.mintemp_c}°`;

            dayFive.textContent = forecastData[4].date;
            dayFive_icon.src = forecastData[4].day.condition.icon;
            dayWeatherFive.textContent = forecastData[4].day.condition.text;
            tempRangeFive.textContent = `${forecastData[4].day.maxtemp_c}° - ${forecastData[4].day.mintemp_c}°`;

            daySix.textContent = forecastData[5].date;
            daySix_icon.src = forecastData[5].day.condition.icon;
            dayWeatherSix.textContent = forecastData[5].day.condition.text;
            tempRangeSix.textContent = `${forecastData[5].day.maxtemp_c}° - ${forecastData[5].day.mintemp_c}°`;

            daySeven.textContent = forecastData[6].date;
            daySeven_icon.src = forecastData[6].day.condition.icon;
            dayWeatherSeven.textContent = forecastData[6].day.condition.text;
            tempRangeSeven.textContent = `${forecastData[6].day.maxtemp_c}° - ${forecastData[6].day.mintemp_c}°`;

        }

            loadingElement.style.display = 'none';
        },2000)
        
    } catch(error){
         console.error("Error: " + error);
         loadingElement.style.display = 'none';

    }

  


    
}

function displayErrorMessage(message){
    console.log(message);
    errorMessage.textContent = `${message}`;
    errorDiv.style.display= 'block';
}



searchBtn.addEventListener('click', getWeather)

okayBtn.addEventListener('click', ()=>{
    errorDiv.style.display='none';
    input.value = '';
})