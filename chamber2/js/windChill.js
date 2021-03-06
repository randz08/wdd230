const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=san+jose+del+monte%2C+bulacan%2C+philippines&units=Imperial&appid=8ded2b1e173144cbf60d5c188578f667";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        const iconURL = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;

        let temp = jsonObject.main.temp;
        let speed = jsonObject.wind.speed;

        document.querySelector('.cityName').textContent = jsonObject.name;
        document.querySelector('figcaption').textContent = jsonObject.weather[0].description;
        document.querySelector('#weatherIcon').setAttribute('src', iconURL);
        document.querySelector('#weatherIcon').setAttribute('alt', jsonObject.weather[0].description);
        document.querySelector('.temp').innerHTML = `Temperature: ${temp} &deg;F`;
        document.querySelector('.wind-speed').textContent = `Wind Speed: ${speed} mph`;
        document.querySelector('.humidityDiv').textContent = `Humidity: ${jsonObject.main.humidity}`;

        let windChill = computeWindChill(temp, speed);

        document.querySelector('.wind-chill').textContent = `Wind Chill: ${windChill}`;

        
    });

    function computeWindChill(t, s) {
        windchill = Math.round((35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) * 100 / 100);

        if (t <= 50 && s > 3) {
            return windchill
        } else {
            return `N/A`
        }
    }

