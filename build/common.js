'use strict';

(function (reactKendo) {
    reactKendo.common = {
        type: function type(obj) {
            return Object.prototype.toString.call(obj).slice(8, -1);
        },
        applyProps: function applyProps(boundProps, keys, kWidget) {
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
        createCommonClassForWidget: function createCommonClassForWidget(widgetName, componentFactory) {
            var reactWidget = React.createClass({
                displayName: 'reactWidget',

                kendoObjectKeys: [],
                getInitialState: function getInitialState() {
                    return {};
                },
                getDefaultProps: function getDefaultProps() {
                    return {
                        bind: {}
                    };
                },
                render: function render() {
                    var domProps = Object.assign({}, this.props);
                    delete domProps.bind;
                    return componentFactory(domProps);
                },
                componentDidMount: function componentDidMount() {
                    jQuery(ReactDOM.findDOMNode(this))[widgetName](this.props.bind);
                    var kWidget = jQuery(ReactDOM.findDOMNode(this)).data(widgetName);
                    for (var key in kWidget) {
                        this.kendoObjectKeys.push(key);
                    }
                },
                componentDidUpdate: function componentDidUpdate() {
                    //Auto apply props to kendo object
                    var kWidget = jQuery(ReactDOM.findDOMNode(this)).data(widgetName);
                    reactKendo.common.applyProps(this.props.bind, this.kendoObjectKeys, kWidget);
                },
                componentWillUnmount: function componentWillUnmount() {
                    jQuery(ReactDOM.findDOMNode(this)).data(widgetName).destroy();
                    jQuery(ReactDOM.findDOMNode(this)).empty();
                }
            });

            return reactWidget;
        }
    };
})(window.reactKendo = window.reactKendo || {});