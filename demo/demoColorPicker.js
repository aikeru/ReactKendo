"use strict";

var Kendo = reactKendo.Kendo;
var App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {
            divStyle: { width: 100, height: 100, backgroundColor: '#e15613' }
        };
    },
    onFlatColorPickerChanged: function onFlatColorPickerChanged(e) {
        var divStyle = this.state.divStyle;
        divStyle.backgroundColor = e.sender.value();
        this.setState({ divStyle: divStyle });
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
                            "Color Picker:"
                        ),
                        React.createElement(Kendo.ColorPicker, { id: "myColorPicker",
                            bind: { buttons: false } })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "Color Picker with Tiny Grey Palette:"
                        ),
                        React.createElement(Kendo.ColorPicker, { bind: {
                                palette: ["#000", "#333", "#666", "#999", "#ccc", "#fff"],
                                columns: 3
                            }, id: "myColorPicker2" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "Flat Color Picker:"
                        ),
                        React.createElement(Kendo.FlatColorPicker, { id: "myFlatColorPicker",
                            bind: { preview: false, value: this.state.backgroundColor, change: this.onFlatColorPickerChanged } })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "Color Selected:"
                        ),
                        React.createElement("div", { style: this.state.divStyle })
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(App, null), document.getElementById('appBody'));