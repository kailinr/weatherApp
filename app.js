const loc = new Location;
const ui = new UI;

//'Change Location" Submission Click
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    let city = document.getElementById ('city').value;
    let state = document.getElementById ('state').value;
    //Get Weather Input
      loc.getWeather(city, state)
        .then(data => {
          ui.showWeather(data);
        })
        .catch(err => console.log(err.message));
  });


  //Default Weather Data
    loc.getWeather('Los Angeles', 'CA').then(data => {
      ui.showWeather(data);
    }).catch(err => console.log(err.message));
