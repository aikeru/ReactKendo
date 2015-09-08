var Kendo = reactKendo.Kendo;
var App = React.createClass({
    getInitialState: function () {
        return {
        };
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
                    </ul>
				</div>
			</div>
		);
	}
});
React.render(<App />, document.getElementById('appBody'));