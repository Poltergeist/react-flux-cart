var React = require('react'),
  PriorityRace = require('./PriorityRace.react');

var Global = React.createClass({
  displayName: 'Global',

  alert: function() {
    console.log('click');
  },

  render: function() {
    return (
      <div className="global">
        <p onClick={this.alert}>Global</p>

        <table>
          <PriorityRace races={['Elf', 'Zwerg']}/>
        </table>
      </div>
    );
  }
});

module.exports = Global;
