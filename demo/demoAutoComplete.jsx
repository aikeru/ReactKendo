var Kendo = reactKendo.Kendo;
var App = React.createClass({
    sampleData: [
        "Arkansas",
        "Arizona",
        "California",
        "Indiana",
        "Missouri",
        "North Carolina",
        "Texas"
    ],
    getInitialState: function () {
        return {
            manualValue: "",
            singleValue: ''
        };
    },
    getSingleValue: function (e) {
        alert(this.state.singleValue);
    },
    onSingleValueChanged: function (e) {
        this.setState({
           singleValue: e.sender.value()
        });
    },
	autoCompleteValueChanged: function(e) {
		this.setState({singleValue: e.target.value, manualValue: e.target.value});
	},
    onAutoCompleteValueChange: function(e) {
        this.setState({manualValue: e.target.value});
    },
	render: function() {
		return (
			<div>
				<div>
                    <ul>
                        <li>
					        <span>Select Multiple with startswith</span>
					        <Kendo.AutoComplete bind={{dataSource: this.sampleData, filter: "startsWith",
					                   placeholder: "Select State...", separator: ", "}}
									   id="myAutoComplete"></Kendo.AutoComplete>
                        </li>
                        <li>
                            <span>Select Single with contains</span>
                            <Kendo.AutoComplete bind={{dataSource: this.sampleData, filter: "contains",
					                   placeholder: "Select State...",
					                   change: this.onSingleValueChanged,
					                   value: this.state.singleValue
					                   }}
                                       id="myAutoComplete"></Kendo.AutoComplete>
                        </li>
                    </ul>
				</div>
				<div>
                    <p>Set the value of the Single dropdown to <input type="text" value={this.state.manualValue}
                                                                      onChange={this.onAutoCompleteValueChange}
                                                                      onBlur={this.autoCompleteValueChanged} /></p>
                    <p>Get the value of the Single dropdown <button onClick={this.getSingleValue}>Get Value</button></p>
				</div>
			</div>
		);
	}
});
ReactDOM.render(<App />, document.getElementById('appBody'));
