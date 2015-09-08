"use strict";

var App = React.createClass({
	displayName: "App",

	sampleData: ["Arkansas", "Arizona", "California", "Indiana", "Missouri", "North Carolina", "Texas"],
	timesClicked: 0,
	keysPressed: 0,
	getInitialState: function getInitialState() {
		return {
			buttonText: "Change This",
			buttonEnabled: false,
			buttonIcon: "cancel"
		};
	},
	changeEnabled: function changeEnabled(enableButton) {
		if (enableButton) {
			this.setState({
				buttonEnabled: true
			});
		} else {
			this.setState({
				buttonEnabled: false
			});
		}
	},
	sayHello: function sayHello(e) {
		alert('Hello from kendo button!');
		console.log(e);
	},
	autoCompleteValueChanged: function autoCompleteValueChanged(e) {
		this.setState({ buttonText: e.target.value });
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				null,
				React.createElement(
					"span",
					null,
					"Select Multiple with startswith"
				),
				React.createElement(KendoAutoComplete, { bind: { dataSource: this.sampleData, filter: "startsWith", placeholder: "Select State...", separator: ", " },
					id: "myAutoComplete" }),
				React.createElement(
					"span",
					null,
					"Select Single with contains"
				),
				React.createElement(KendoAutoComplete, { bind: { dataSource: this.sampleData, filter: "contains", placeholder: "Select State..." },
					id: "myAutoComplete" })
			),
			React.createElement(
				"div",
				null,
				React.createElement("input", { type: "text", value: this.state.buttonText, onBlur: this.autoCompleteValueChanged }),
				React.createElement(
					"button",
					{ onClick: this.changeEnabled.bind(this, true) },
					"Set Enabled"
				),
				React.createElement(
					"button",
					{ onClick: this.changeEnabled.bind(this, false) },
					"Set Disabled"
				)
			)
		);
	}
});
React.render(React.createElement(App, null), document.getElementById('appBody'));