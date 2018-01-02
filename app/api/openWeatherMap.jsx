var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=65b6172a1308505f06e5dd64c6d631d2&units=metric';


module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response) {
      if(response.data.cod && response.data.message){
        throw new Error('Unable to fetch weather ');
      } else {
        return response.data.main.temp;
      }
    }, function(error){
      throw new Error(error.response.data.message);
    });
  }

}
