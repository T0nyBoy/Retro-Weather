// defining the consts
const key = "b857d03a99c79abd8612f7738bf68da0";
const cityForm = document.querySelector("#cityName");
const details = document.querySelector("#weatherData");
const extendedWeather = document.querySelector("#extendedWeather");
const btnSelect = document.querySelector("button");
const forecast = new WeatherForecast();


//----Getting the data from the API and updating the DOM----
btnSelect.addEventListener("click", function(e){
    e.preventDefault();
    cityName = cityForm.value.trim();
    details.style.display = "block";
    extendedWeather.style.display = "block";
    
    forecast.fetchAsync (cityName)
    .then(respondData => {
        details.innerHTML = `
        <h1>_> ${respondData.respondedCityName}</h1>
            <div>_> ${respondData.respondedSky}</div>
            <div>
                <span>_> Cloudiness: </span>
                <span>${respondData.respondedCloudiness}</span>
                <span>%</span>
            </div>
            <div>
            <span>_> Temperature: </span>
              <span>${respondData.respondedTemp}</span>
              <span>&deg;C</span>
            </div>
            <div>
                <span>_> Humidity: </span>
                <span>${respondData.respondedHumid}</span>
                <span>%</span>
            </div>
            `
    })
    .catch(error => console.log(error));

    forecast.fetchForecastAsync(cityName)
    .then(thedata=> { 
        extendedWeather.innerHTML = ``
        for(i=0; i<thedata.list.length;i++){
            extendedWeather.innerHTML +=
            `
            <div>
            _> Date: ${thedata.list[i].dt_txt}, ${thedata.list[i].weather[0].description}, 
            Temp: ${thedata.list[i].main.temp}<span>&deg;C</span>, Humidity: ${thedata.list[i].main.humidity}%
            </div>
            `
        }
    })
    .catch(
        error => console.log(error)
    );


    cityForm.value = "";
});