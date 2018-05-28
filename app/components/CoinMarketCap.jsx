var React = require('react');
var CoinMarketCapForm = require('CoinMarketCapForm');
var CoinMarketCapMessage = require('CoinMarketCapMessage');
var ErrorModal = require('ErrorModal');
var coinMarketCap = require('coinMarketCap');

var CoinMarketCap = React.createClass({
  getInitialState : function (){
    return {
      isLoading: false
    }
  }

  handleSearch: function (location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

/* call coinmarketcap
    coinMarketCap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(e){
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
    });

  }*/
  render: function () {
    var {isLoading,listing,errorMessage} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h3 className="text-center">Fetching weather ....</h3>
      } else if (listing) {
        return <CoinMarketCapMessage />;
      }
    }
    function renderError(){
if(typeof errorMessage==='string'){
  return (
    <ErrorModal message={errorMessage} />
  )
}

module.exports=CoinMarketCap;
