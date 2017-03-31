'use strict';

var Kendo = reactKendo.Kendo;
var App = React.createClass({
    displayName: 'App',

    getInitialState: function getInitialState() {
        return {
            datePickerValue: ''
        };
    },
    onDatePickerValueChange: function onDatePickerValueChange(e) {
        this.setState({ datePickerValue: e.target.value });
    },
    onDatePickerChange: function onDatePickerChange(e) {
        this.setState({ datePickerValue: e.sender.value() });
    },
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
                            'Date picker mode:'
                        ),
                        React.createElement(Kendo.DatePicker, { id: 'myDatePicker', bind: { value: this.state.datePickerValue,
                                change: this.onDatePickerChange } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'span',
                            null,
                            'Month picker mode:'
                        ),
                        React.createElement(Kendo.DatePicker, { bind: { start: 'year', depth: 'year', format: 'MMMM yyyy' }, id: 'myMonthPicker' })
                    )
                )
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Set the value of the date picker ',
                    React.createElement('input', { type: 'text', value: this.state.datePickerValue,
                        onChange: this.onDatePickerValueChange })
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(App, null), document.getElementById('appBody'));