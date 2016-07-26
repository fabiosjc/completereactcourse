var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRouter, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>
  , document.getElementById('app')
);
