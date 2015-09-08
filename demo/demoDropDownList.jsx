var Kendo = reactKendo.Kendo;
var App = React.createClass({
    getInitialState: function () {
        return {
        };
    },
    staticDataSource: [
      'Apple',
        'Apricot',
        'Banana',
        'Beat',
        'Carrot',
        'Cucumber',
        'Onion',
        'Orange',
        'Kale'
    ],
	render: function() {
		return (
			<div>
				<div>
                    <ul>
                        <li>
					        <span>Color Picker:</span>
					        <Kendo.DropDownList id="myDropDownList"
                                bind={{dataSource: this.staticDataSource}}></Kendo.DropDownList>
                        </li>
                    </ul>
				</div>
			</div>
		);
	}
});
React.render(<App />, document.getElementById('appBody'));