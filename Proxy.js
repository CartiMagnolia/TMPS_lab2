class WeatherProxy {
    constructor() {
        this.cache = {};
        this.lastRequest = null;
    }

    getWeather(city) {
        if (this.cache[city] && Date.now() - this.lastRequest < 300000) { //300000 = 5 minute
            console.log('Returning cached data...');
            return Promise.resolve(this.cache[city]);
        } else {
            console.log('Making a request to API...');
            this.lastRequest = Date.now();
            return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your-api-key`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    this.cache[city] = data;
                    return data;
                })
                .catch(error => console.error('Error:', error));
        }
    }
}

// Utilizarea proxy-ului:
const proxy = new WeatherProxy();
proxy.getWeather('London').then(data => console.log(data));
proxy.getWeather('Paris').then(data => console.log(data));
proxy.getWeather('London').then(data => console.log(data));
