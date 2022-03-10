class Location {
  constructor(){
    this.appid = apiSecret;
    this.country_code = 'USA';
  }

  async getWeather(city, state){

    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${this.country_code}&units=imperial&lang=en&appid=${this.appid}`);

    const weatherData = await weatherResponse.json();

    return {
      weatherData
    }
  }

  
}



