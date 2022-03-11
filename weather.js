class Location {
  constructor(city, state){
    this.appid = "273903cb53074d8b729cebb1380baa59";
    this.country_code = 'US';
    this.city = city;
    this.state = state;
  }

  async getWeather(){

    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country_code}&units=imperial&lang=en&appid=${this.appid}`);

    const weatherData = await weatherResponse.json();

    return {
      weatherData
    }
  }

  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
  
}



