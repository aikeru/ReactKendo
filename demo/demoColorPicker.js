"use strict";

var Kendo = reactKendo.Kendo;
var App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {};
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
                    )
                )
            )
        );
    }
});
React.render(React.createElement(App, null), document.getElementById('appBody'));