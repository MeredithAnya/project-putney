var React = require('react')
var NavBar = require('./navbar');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main">
        <NavBar/>
      </div>
    )
  }
});

module.exports = Main;
