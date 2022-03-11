class UI {
  constructor(){
    this.locationW = document.getElementById('w-location');
    this.descrW = document.getElementById('w-desc');
    this.tempW = document.getElementById('w-string');
    this.iconW = document.getElementById('w-icon');
    this.humidityW = document.getElementById('w-humidity');
    this.highW = document.getElementById('w-high');
    this.lowW = document.getElementById('w-low');
    this.feelsW = document.getElementById('w-feels-like');
    this.windW = document.getElementById('w-wind');
  }
  showWeather(data){
    const name = data.weatherData.name;
    const description = data.weatherData.weather[0].main;
    const temp = data.weatherData.main.temp;
    const iconList = data.weatherData.weather[0].icon;
    const humidity = data.weatherData.main.humidity;
    const high = data.weatherData.main.temp_max;
    const low = data.weatherData.main.temp_min;
    const feelsLike = data.weatherData.main.feels_like;
    const windSpeed = data.weatherData.wind.speed;
    const windDeg = data.weatherData.wind.deg;
    //Header Details
    this.locationW.textContent = name; //city
    this.descrW.textContent = description; //description
    this.tempW.textContent = temp; //temp
    this.iconW.src = `http://openweathermap.org/img/wn/${iconList}@2x.png`;
    //Weather Widget Details
    this.humidityW.textContent = `Humidity: ${humidity}`;
    this.highW.textContent = `High: ${high}`;
    this.lowW.textContent = `Low: ${low}`;
    this.feelsW.textContent = `Feels Like: ${feelsLike}`;
    this.windW.textContent = `Windspeed: ${windSpeed} from ${windDeg} degrees`;
    }
}