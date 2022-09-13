const request = require('request');


const fetchMyIP = function(callback){
//    const res =  
   request(`https://api.ipify.org?format=json`, (error, response, body)=>{

         try {
            const data = JSON.parse(response.body)

            callback(null, data.ip)
            if (response.statusCode !== 200) {
                const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
                callback(Error(msg), null);
                return;
            }
         } catch (error) {
            if (error) {
                callback(error, null);
                return;
            }
         }
 
        
    })

}

const fetchCoordsByIp = function (ip, callback){
    request(`http://ipwho.is/${ip}`, (error, response, body)=>{
        try {

            if(error){
                callback(error, null)
            }
           const data = JSON.parse(body)
            if(!data.success){
                const message = `Success, Server message says: ${data.message}`;
                callback(Error(message), null)
            }


            const {latitude, longitude} = data;
            callback(null, {latitude, longitude})
        
        } catch (error) {
           if (error) {
               callback(error, null);
               return;
           }
        } 
   })

}
module.exports = {  fetchCoordsByIp  }