const city = document.querySelector('.location');
const cityDate = document.querySelector('.loc-date');
const input = document.querySelector('input');
const searchBtn = document.querySelector('button');
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







async function getWeather(){
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=76ac74ae107c46c092d223136230410&q=${input.value}&days=7`, {mode: 'cors'});
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



    // for (let i=0 ; i< forecastData.length; i++){

    //     if(i===0){
    //         dayOne.textContent = forecastData[i].date;
    //         dayOne_icon.src = forecastData[i].day.condition.icon;
    //         dayWeatherOne.textContent = forecastData[i].day.condition.text;
    //         tempRangeOne.textContent = `${forecastData[i].day.maxtemp_c}° - ${forecastData[i].day.mintemp_c}°`;

    //     }else if(i === 1){
    //         dayTwo.textContent = forecastData[i].date;
    //         dayTwo_icon.src = forecastData[i].day.condition.icon;
    //         dayWeatherTwo.textContent = forecastData[i].day.condition.text;
    //         tempRangeTwo.textContent = `${forecastData[i].day.maxtemp_c}° - ${forecastData[i].day.mintemp_c}°`;
    //     }else if(i === 2){
    //         dayThree.textContent = forecastData[i].date;
    //         dayThree_icon.src = forecastData[i].day.condition.icon;
    //         dayWeatherThree.textContent = forecastData[i].day.condition.text;
    //         tempRangeThree.textContent = `${forecastData[i].day.maxtemp_c}° - ${forecastData[i].day.mintemp_c}°`;

    //     }else if(i === 3){
    //         dayFour.textContent = forecastData[i].date;
    //         dayFour_icon.src = forecastData[i].day.condition.icon;
    //         dayWeatherFour.textContent = forecastData[i].day.condition.text;
    //         tempRangeFour.textContent = `${forecastData[i].day.maxtemp_c}° - ${forecastData[i].day.mintemp_c}°`;

    //     }
     
    // }
}



searchBtn.addEventListener('click', getWeather)