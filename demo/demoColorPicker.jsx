var Kendo = reactKendo.Kendo;
var App = React.createClass({
    getInitialState: function () {
        return {
            divStyle: { width: 100, height: 100, backgroundColor: '#e15613' }
        };
    },
    onFlatColorPickerChanged: function(e) {
        var divStyle = this.state.divStyle;
        divStyle.backgroundColor = e.sender.value();
        this.setState({divStyle: divStyle });
    },
	render: function() {
		return (
			<div>
				<div>
                    <ul>
                        <li>
					        <span>Color Picker:</span>
					        <Kendo.ColorPicker id="myColorPicker"
                                bind={{buttons: false}}></Kendo.ColorPicker>
                        </li>
                        <li>
                            <span>Color Picker with Tiny Grey Palette:</span>
                            <Kendo.ColorPicker bind={{
                                palette: [ "#000", "#333", "#666", "#999", "#ccc", "#fff" ],
                                columns: 3
                             }} id="myColorPicker2"></Kendo.ColorPicker>
                        </li>
                        <li>
                            <span>Flat Color Picker:</span>
                            <Kendo.FlatColorPicker id="myFlatColorPicker"
                                bind={{preview: false, value: this.state.backgroundColor, change: this.onFlatColorPickerChanged}}></Kendo.FlatColorPicker>
                        </li>
                        <li>
                            <span>Color Selected:</span>
                            <div style={this.state.divStyle}></div>
                        </li>
                    </ul>
				</div>
			</div>
		);
	}
});
ReactDOM.render(<App />, document.getElementById('appBody'));
