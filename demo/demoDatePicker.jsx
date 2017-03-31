var Kendo = reactKendo.Kendo;
var App = React.createClass({
    getInitialState: function () {
        return {
            datePickerValue: ''
        };
    },
    onDatePickerValueChange: function(e) {
      this.setState({datePickerValue: e.target.value});
    },
    onDatePickerChange: function(e) {
      this.setState({datePickerValue: e.sender.value()});
    },
	render: function() {
		return (
			<div>
				<div>
                    <ul>
                        <li>
					        <span>Date picker mode:</span>
					        <Kendo.DatePicker id="myDatePicker" bind={{value: this.state.datePickerValue,
					            change: this.onDatePickerChange}}></Kendo.DatePicker>
                        </li>
                        <li>
                            <span>Month picker mode:</span>
                            <Kendo.DatePicker bind={{start:'year',depth:'year',format:'MMMM yyyy'}}  id="myMonthPicker"></Kendo.DatePicker>
                        </li>
                    </ul>
				</div>
				<div>
                    <p>Set the value of the date picker <input type="text" value={this.state.datePickerValue}
                                                                      onChange={this.onDatePickerValueChange} /></p>
				</div>
			</div>
		);
	}
});
ReactDOM.render(<App />, document.getElementById('appBody'));
