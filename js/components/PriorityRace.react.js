var React = require('react');

var PriorityRace = React.createClass({
  displayName: 'PriorityRace',

  propTypes: {
    races: React.PropTypes.array
  },

  render: function() {
    return (
      <tr className="race">
        {this.props.races.map(function(race, index) {
          return (
            <td key={index}>{race}</td>
          );
        })}
      </tr>
    );
  }
});

module.exports = PriorityRace;
