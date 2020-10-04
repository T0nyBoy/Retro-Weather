//----Getting the data from the API object----



class WeatherForecast{
    constructor() {}
        //----------------|
        // Current Weather|
        //----------------|
        // async function
        async fetchAsync (whatCity) {
            //current forecast
            URL=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${key}`;
            // await response of fetch call
            let response = await fetch(URL);
            // only proceed once promise is resolved
            let data = await response.json();
            // only proceed once second promise is resolved
            return {respondedCityName: data.name, 
                respondedSky: data.weather[0].description,
                respondedCloudiness: data.clouds.all,
                respondedTemp: data.main.temp,
                respondedHumid: data.main.humidity
            };
        }

        //----------------|
        // 5 days forecast|
        //----------------|

        // async function
        async fetchForecastAsync (whatCity) {
            //5 days forecast
            URL=`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${cityName}&appid=${key}`;
            // await response of fetch call
            let response = await fetch(URL);
            // only proceed once promise is resolved
            let data = await response.json();
            // only proceed once second promise is resolved
            return data;
        }

}

