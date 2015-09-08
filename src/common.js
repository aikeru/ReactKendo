var common = {
	type: function(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1);
	},
	applyProps: function(boundProps, keys, kWidget) {
		outer: for(var propKey in boundProps) {
			for(var kendoKeyIndex = 0; kendoKeyIndex < keys.length; kendoKeyIndex++) {
				var kendoKey = keys[kendoKeyIndex];
				if(propKey === kendoKey) {
					if(common.type(kWidget[kendoKey]) === 'Function') {
						kWidget[kendoKey](boundProps[propKey]);
					}
					continue outer;
				}
			}
		}
	}
};

common.createCommonClassForWidget = function(widgetName, componentFactory) {
    var reactWidget = React.createClass({
        kendoObjectKeys: [],
        getInitialState: function() {
            return {
                bind: {}
            }
        },
        getDefaultProps: function() {
            return {
                bind: {}
            };
        },
        render: function() {
            return componentFactory(this.props);
        },
        componentDidMount: function() {
            jQuery(this.getDOMNode())[widgetName](this.props.bind);
            var kButton = jQuery(this.getDOMNode()).data(widgetName);
            for(var key in kButton) {
                this.kendoObjectKeys.push(key);
            }
        },
        componentDidUpdate: function() {
            //Auto apply props to kendo object
            var kWidget = jQuery(this.getDOMNode()).data(widgetName);
            common.applyProps(this.props.bind, this.kendoObjectKeys, kWidget);
        },
        componentWillUnmount: function() {
            jQuery(this.getDOMNode()).data(widgetName).destroy();
            jQuery(this.getDOMNode()).empty();
        }
    });

    return reactWidget;
};

//Create common widgets
var KendoAutoComplete = common.createCommonClassForWidget('kendoAutoComplete', (props) => <input {...props} />);
var KendoDatePicker = common.createCommonClassForWidget('kendoDatePicker', (props) => <input {...props} />);
var KendoButton = common.createCommonClassForWidget('kendoButton', (props) => <button {...props}>{props.children}</button>);