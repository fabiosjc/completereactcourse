var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f449c7b33050bb4e0c707f0e6968a0fd&units=imperial';

module.exports = {

  getTemp: function (location) {
    var encondedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encondedLocation}`;

    return axios.get(requestURL).then(
      function (resp) {
        if (resp.data.cod && resp.data.message){
          throw new Error(resp.data.message);
        }else{
          return resp.data.main.temp;
        }
      },
      function (resp) {
        throw new Error(res.data.message);
      }
    )
  }
};
