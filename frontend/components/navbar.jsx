var React = require('react');


var NavBar = React.createClass({
  render: function(){
    return (
      <nav className="nav-bar">
        LYNN PUTNEY
        <ul className="nav-tabs">
          <li><a href="#">Home</a></li>
          <li><a href="#">Recent Work</a></li>
          <li><a href="#">Casein Paintings</a></li>
          <li><a href="#">Eleven</a></li>
          <li><a href="#">VCCA</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = NavBar;
