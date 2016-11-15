var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>
            Rendered
            {props.children}
          </p>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
