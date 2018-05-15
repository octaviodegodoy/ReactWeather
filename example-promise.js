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
 function addPromise(a,b){
   return new Promise(function (resolve,reject){
  if (typeof a === 'number' && typeof b === 'number'){
      resolve([a,b]);
  } else {
    reject('a and b has to be numbers ');
  }
  })
 }

 addPromise(2,9).then(function(sum){
   console.log('success ',array);
 },function(err){
   console.log('not numbers',err);
 });
