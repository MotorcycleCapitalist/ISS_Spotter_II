// index.js
const { fetchMyIP, fetchCoordsByIp } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIp ('190.87.162.50',(error, coordinates) => {

    if (error) {
      console.log("It didn't work2!" , callback.error);
      return;
    }
  
    console.log('It worked! Returned coordinates are:' , coordinates);
  });


 