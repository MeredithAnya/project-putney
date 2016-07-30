var React = require('react');
var ReactDom = require('react-dom');
var Main = require('./components/main');

document.addEventListener('DOMContentLoaded', function(){
  ReactDom.render(<Main/>, document.getElementById('content'))
});
