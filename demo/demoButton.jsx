var Kendo = reactKendo.Kendo;

var App = React.createClass({
  getInitialState: function() {
    return {
		buttonText: "Change This",
		buttonEnabled: false,
		buttonIcon: "cancel"
	};
  },
  changeEnabled: function(enableButton) {
	if(enableButton) {
		this.setState({
			buttonEnabled: true
		});
	} else {
		this.setState({
			buttonEnabled: false
		});
	}
  },
  sayHello: function(e) {
	alert('Hello from kendo button!');
	console.log(e);
  },
  buttonTextChanged: function(e) {
	this.setState({buttonText: e.target.value});
  },
  render: function() {
    return (
		<div>
			<div>
				<Kendo.Button bind={{enable:this.state.buttonEnabled, icon: "cancel"}} id="myButton">Disabled!</Kendo.Button>
				<Kendo.Button bind={{enable:true, icon: "note"}} id="myButton2">Enabled!</Kendo.Button>
				<Kendo.Button bind={{icon: "tick"}} id="myButton3">Correct</Kendo.Button>
				<Kendo.Button bind={{click: this.sayHello}} id="myButton4">Say Hello</Kendo.Button>
				<Kendo.Button id="myButton5">{this.state.buttonText}</Kendo.Button>
		  
			</div>
			<div>
				<input type="text" value={this.state.buttonText} onChange={this.buttonTextChanged} />
				<button onClick={this.changeEnabled.bind(this,true)}>Set Enabled</button>
				<button onClick={this.changeEnabled.bind(this,false)}>Set Disabled</button>
			</div>
		</div>
	);
  }
});
React.render(<App />, document.getElementById('appBody'));