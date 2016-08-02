var React = require('react');
var PropTypes = React.PropTypes;

var WeatherForm = React.createClass({

  render: function() {
    return (
      <form action="">
        <input type="text" placeholder="Enter city name"/>
        <button>Get Weather</button>
      </form>
    );
  }

});

module.exports = WeatherForm;
