/** @jsx React.DOM */
!function(reactKendo) {
	
	reactKendo.type = function(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1);
	}
	
	reactKendo.applyProps = function(boundProps, keys, kWidget) {
		outer: for(var propKey in boundProps) {
			for(var kendoKeyIndex = 0; kendoKeyIndex < keys.length; kendoKeyIndex++) {
				var kendoKey = keys[kendoKeyIndex];
				if(propKey === kendoKey) {
					if(reactKendo.type(kWidget[kendoKey]) === 'Function') {
						kWidget[kendoKey](boundProps[propKey]);
					}
					continue outer;
				}
			}
		}
	}
	
}(window.reactKendo = window.reactKendo || {});

var KendoAutoComplete = React.createClass({
  widgetName: 'kendoAutoComplete',
  kendoObjectKeys: [],
  getInitialState: function() {
    return {
	  bind: {}
    }
  },
  getDefaultProps: function() {
    return {component: React.DOM.input};
  },
  render: function() {
	var component = this.props.component;
    return <component {...this.props}>{this.props.children}</component>;
  },
  componentDidMount: function() {
    jQuery(this.getDOMNode())[this.widgetName](this.props.bind);
	var kWidget = jQuery(this.getDOMNode()).data(this.widgetName);
	for(var key in kWidget) {
		this.kendoObjectKeys.push(key);
	}
  },
  componentDidUpdate: function() {
	//Auto apply props to kendo object	
	var kWidget = jQuery(this.getDOMNode()).data(this.widgetName);
	reactKendo.applyProps(this.props.bind, this.kendoObjectKeys, kWidget);
  },
  componentWillUnmount: function() {
    jQuery(this.getDOMNode()).data(this.widgetName).destroy();
	jQuery(this.getDOMNode()).empty();
  }
});