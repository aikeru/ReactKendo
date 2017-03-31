"use strict";

var Kendo = reactKendo.Kendo;

var App = React.createClass({
	displayName: "App",

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
	buttonTextChanged: function buttonTextChanged(e) {
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
					Kendo.Button,
					{ bind: { enable: this.state.buttonEnabled, icon: "cancel" }, id: "myButton" },
					"Disabled!"
				),
				React.createElement(
					Kendo.Button,
					{ bind: { enable: true, icon: "note" }, id: "myButton2" },
					"Enabled!"
				),
				React.createElement(
					Kendo.Button,
					{ bind: { icon: "tick" }, id: "myButton3" },
					"Correct"
				),
				React.createElement(
					Kendo.Button,
					{ bind: { click: this.sayHello }, id: "myButton4" },
					"Say Hello"
				),
				React.createElement(
					Kendo.Button,
					{ id: "myButton5" },
					this.state.buttonText
				)
			),
			React.createElement(
				"div",
				null,
				React.createElement("input", { type: "text", value: this.state.buttonText, onChange: this.buttonTextChanged }),
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
ReactDOM.render(React.createElement(App, null), document.getElementById('appBody'));