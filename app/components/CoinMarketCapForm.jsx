var React = require('react');

var CoinMarketCapForm = React.createClass({
  onFormSubmit: function(e){
   e.preventDefault();

  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
        <button className="button expanded hollow">Get Coins</button>
       </form>
     </div>
    );
  }
});

module.exports=CoinMarketCapForm;
