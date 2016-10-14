var React = require('react');

// Stateless componente, fazendo o destructuring na declaração do argumento ao inveś de ter que declarar: "var {temperature, location} = props;" 
var WeatherMessage = ({temperature, location}) => {
  return (
    <p>It's it {temperature} in {location}.</p>
  );
}

module.exports = WeatherMessage;
