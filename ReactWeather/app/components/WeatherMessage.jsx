var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temperature, location} = this.props;
    return (
      <p>It's it {temperature} in {location}.</p>
    );
  }

});

module.exports = WeatherMessage;
