const storage = new Storage;
//Set variable to call getStorage method
const weatherLocation = storage.getLocationStorage(); 
const loc = new Location(weatherLocation.city, weatherLocation.state);
const ui = new UI;


//'On-load' el
  document.addEventListener('DOMContentLoaded', getWeather);

//Weather API Request Function
function getWeather(){
    loc.getWeather()
    .then(data => {
      ui.showWeather(data);
    })
    .catch(err => console.log(err.message));
 }

//'Change Location" el
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    let city = document.getElementById ('city').value;
    let state = document.getElementById ('state').value;
    //Change Weather
    loc.changeLocation(city, state);
    //Call getWeather
    getWeather();
    //Store Weather
    storage.setLocationStorage(city, state);
    //Close Modal
    $('#locModal').modal('hide');
  });