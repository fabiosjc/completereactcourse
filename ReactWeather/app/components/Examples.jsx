var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1>Examples</h1>
      <p>Here are few examples locations to try out: </p>
      <ol>
        <li><Link to='/?Philadelphia'>Philadelphia, PA</Link></li>
      </ol>
      <ol>
        <li><Link to='/?Rio'>Rio, Brazil</Link></li>
      </ol>
    </div>
  );
}

module.exports = Examples;
