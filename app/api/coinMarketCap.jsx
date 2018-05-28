var axios = require('axios');

const COIN_MARKET_CAP_URL = 'https://api.coinmarketcap.com/v2/listings/';


module.exports = {
  getQuotes: function(){
    var requestUrl = `${COIN_MARKET_CAP_URL}`;

    return axios.get(requestUrl).then(function(response) {
      if(response.data.cod && response.data.message){
        throw new Error('Unable to fetch quotes ');
      } else {
        return response.data.id;
      }
    }, function(error){
      throw new Error(error.response.data.id);
    });
  }

}
