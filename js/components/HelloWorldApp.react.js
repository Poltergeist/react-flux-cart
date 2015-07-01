var React = require('react'),
  Global = require('./Global.react');

var HelloWorldApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
        <Global/>
      </div>
    );
  }
});

module.exports = HelloWorldApp;
