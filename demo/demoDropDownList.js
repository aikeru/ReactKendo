'use strict';

var Kendo = reactKendo.Kendo;
var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {};
  },
  staticDataSource: ['Apple', 'Apricot', 'Banana', 'Beat', 'Carrot', 'Cucumber', 'Onion', 'Orange', 'Kale'],
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              'span',
              null,
              'Drop Down List:'
            ),
            React.createElement(Kendo.DropDownList, { id: 'myDropDownList',
              bind: { dataSource: this.staticDataSource } })
          )
        )
      )
    );
  }
});
ReactDOM.render(React.createElement(App, null), document.getElementById('appBody'));