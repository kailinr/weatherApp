//https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8762436#questions/11230011

class Storage {
  constructor(){
    this.city;
    this.state;
    this.default_city = 'Los Angeles';
    this.default_state = 'CA';
  }

  getLocationStorage(){
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === 'undefined') {
      this.city = this.default_city;
    } else {
      this.city = localStorage.getItem('city')
    }

    if (localStorage.getItem('state') === null || localStorage.getItem('state') === 'undefined') {
      this.state = this.default_state;
    } else {
      this.state = localStorage.getItem('state')
    }

    return {
      city: this.city,
      state: this.state,
    }
  }

  setLocationStorage(city, state){    
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }

}

