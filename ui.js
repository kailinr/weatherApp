class UI {
  constructor(){
  }

  clearModal() {
    document.querySelector('#locModal').remove();
  }

  showWeather(data){
    console.log(data);

    const name = data.weatherData.name;
    const description = data.weatherData.weather[0].main;
    const temp = data.weatherData.main.temp;
    const iconList = data.weatherData.weather[0].icon;
    const iconID = data.weatherData.weather[0].id;

    const humidity = data.weatherData.main.humidity;
    const high = data.weatherData.main.temp_max;
    const low = data.weatherData.main.temp_min;
    const feelsLike = data.weatherData.main.feels_like;
    const windSpeed = data.weatherData.wind.speed;
    const windDeg = data.weatherData.wind.deg;


    //HEADER
    document.getElementById('w-location').textContent = name; //city
    document.getElementById('w-desc').textContent = description; //description
    document.getElementById('w-string').textContent = temp; //temp

    //Add icon
    document.getElementById('w-icon').src = `http://openweathermap.org/img/wn/${iconList}@2x.png`
    

    //WEATHER DETAILS
    document.getElementById('w-humidity').textContent = `Humidity: ${humidity}`;
    document.getElementById('w-high').textContent = `High: ${high}`;
    document.getElementById('w-low').textContent = `Low: ${low}`;
    document.getElementById('w-feels-like').textContent = `Feels Like: ${feelsLike}`;
    document.getElementById('w-wind').textContent = `Windspeed: ${windSpeed} from ${windDeg} degrees`;

    // //Clear Modal
    this.clearModal();
    }



}