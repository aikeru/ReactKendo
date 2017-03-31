(function(reactKendo) {
    reactKendo.common = {
        type: function (obj) {
            return Object.prototype.toString.call(obj).slice(8, -1);
        },
        applyProps: function (boundProps, keys, kWidget) {
            outer: for (var propKey in boundProps) {
                for (var kendoKeyIndex = 0; kendoKeyIndex < keys.length; kendoKeyIndex++) {
                    var kendoKey = keys[kendoKeyIndex];
                    if (propKey === kendoKey) {
                        if (reactKendo.common.type(kWidget[kendoKey]) === 'Function') {
                            kWidget[kendoKey](boundProps[propKey]);
                        }
                        continue outer;
                    }
                }
            }
        },
        createCommonClassForWidget: function (widgetName, componentFactory) {
            var reactWidget = React.createClass({
                kendoObjectKeys: [],
                getInitialState: function () {
                    return {
                    }
                },
                getDefaultProps: function () {
                    return {
                        bind: {}
                    };
                },
                render: function () {
                    const domProps = Object.assign({}, this.props);
                    delete domProps.bind;
                    return componentFactory(domProps);
                },
                componentDidMount: function () {
                    jQuery(ReactDOM.findDOMNode(this))[widgetName](this.props.bind);
                    var kWidget = jQuery(ReactDOM.findDOMNode(this)).data(widgetName);
                    for (var key in kWidget) {
                        this.kendoObjectKeys.push(key);
                    }
                },
                componentDidUpdate: function () {
                    //Auto apply props to kendo object
                    var kWidget = jQuery(ReactDOM.findDOMNode(this)).data(widgetName);
                    reactKendo.common.applyProps(this.props.bind, this.kendoObjectKeys, kWidget);
                },
                componentWillUnmount: function () {
                    jQuery(ReactDOM.findDOMNode(this)).data(widgetName).destroy();
                    jQuery(ReactDOM.findDOMNode(this)).empty();
                }
            });

            return reactWidget;
        }
    };
})(window.reactKendo = window.reactKendo || {});
