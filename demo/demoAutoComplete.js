"use strict";

var Kendo = reactKendo.Kendo;
var App = React.createClass({
    displayName: "App",

    sampleData: ["Arkansas", "Arizona", "California", "Indiana", "Missouri", "North Carolina", "Texas"],
    getInitialState: function getInitialState() {
        return {
            manualValue: "",
            singleValue: ''
        };
    },
    getSingleValue: function getSingleValue(e) {
        alert(this.state.singleValue);
    },
    onSingleValueChanged: function onSingleValueChanged(e) {
        this.setState({
            singleValue: e.sender.value()
        });
    },
    autoCompleteValueChanged: function autoCompleteValueChanged(e) {
        this.setState({ singleValue: e.target.value, manualValue: e.target.value });
    },
    onAutoCompleteValueChange: function onAutoCompleteValueChange(e) {
        this.setState({ manualValue: e.target.value });
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                null,
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "Select Multiple with startswith"
                        ),
                        React.createElement(Kendo.AutoComplete, { bind: { dataSource: this.sampleData, filter: "startsWith",
                                placeholder: "Select State...", separator: ", " },
                            id: "myAutoComplete" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "Select Single with contains"
                        ),
                        React.createElement(Kendo.AutoComplete, { bind: { dataSource: this.sampleData, filter: "contains",
                                placeholder: "Select State...",
                                change: this.onSingleValueChanged,
                                value: this.state.singleValue
                            },
                            id: "myAutoComplete" })
                    )
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Set the value of the Single dropdown to ",
                    React.createElement("input", { type: "text", value: this.state.manualValue,
                        onChange: this.onAutoCompleteValueChange,
                        onBlur: this.autoCompleteValueChanged })
                ),
                React.createElement(
                    "p",
                    null,
                    "Get the value of the Single dropdown ",
                    React.createElement(
                        "button",
                        { onClick: this.getSingleValue },
                        "Get Value"
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(App, null), document.getElementById('appBody'));