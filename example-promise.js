// function getTempCallback(location, callback) {
//   callback(undefined, 78); Test change again
//   callback('City not Found');
// }
//
// getTempCallback('Botucatu', function(err, temp) {
//   if (err) {
//     console.log('error', err); testing new pull
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000)
//
//   });
// }
//
// getTempPromise('Botucatu').then(function(temp) {
//   console.log('promise success ', temp);
// }, function(err) {
//   console.log('promise error ', err);
// });
// function addPromise(a,b){
//   return new Promise(function (resolve,reject){
//  if (typeof a === 'number' && typeof b === 'number'){
//      resolve(a + b);
//  } else {
//    reject('a and b has to be numbers ');
//  }
//  })
// }
//
// addPromise(2,'t').then(function(sum){
//   console.log('success ',sum);
// },function(err){
//   console.log('not numbers',err);
// });
//

var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=65b6172a1308505f06e5dd64c6d631d2&units=metric';

function getTemperature(location){

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
const loc = 'Santiago';
getTemperature(loc).then(function(temp){
  console.log('Temperatura em',loc,temp,'graus');},
  function(error){
    console.log(error);
  });
