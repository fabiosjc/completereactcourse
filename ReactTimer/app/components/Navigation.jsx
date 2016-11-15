var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div id="responsive-menu">
        <div className="top-bar-left">
          <ul className="menu" data-dropdown-menu>
            <li className="menu-text">React Timer App</li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              </li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Countdown</IndexLink>
              </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search" /></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

module.exports = Navigation;
