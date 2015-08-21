var React = require('react');
var Select = require('react-select');

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}

var SelectComponent = React.createClass({
  render: function() {

    return (
      <div>
        
        <Select
          name="form-field-name"
          value="one"
          options={options}
          onChange={logChange}
        />

      </div>
    );
  }
});


angular.module('myApp').value('SelectComponent', SelectComponent);