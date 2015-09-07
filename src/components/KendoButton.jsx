/** @jsx React.DOM */
//TODO: create kendo button react component

!function(reactKendo) {
	
	reactKendo.type = function(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1);
	}
	
}(window.reactKendo = window.reactKendo || {});

var KendoButton = React.createClass({
  kendoObjectKeys: [],
  getInitialState: function() {
    return {
	  bind: {}
    }
  },
  getDefaultProps: function() {
    return {component: React.DOM.button};
  },
  render: function() {
	var component = this.props.component;
    return <component {...this.props}>{this.props.children}</component>;
  },
  componentDidMount: function() {
    jQuery(this.getDOMNode()).kendoButton(this.props.bind);
	var kButton = jQuery(this.getDOMNode()).data('kendoButton');
	for(var key in kButton) {
		this.kendoObjectKeys.push(key);
	}
  },
  componentDidUpdate: function() {
	//Auto apply props to kendo object	
	var kButton = jQuery(this.getDOMNode()).data('kendoButton');
	outer: for(var propKey in this.props.bind) {
		for(var kendoKeyIndex = 0; kendoKeyIndex < this.kendoObjectKeys.length; kendoKeyIndex++) {
			var kendoKey = this.kendoObjectKeys[kendoKeyIndex];
			if(propKey === kendoKey) {
				if(reactKendo.type(kButton[kendoKey]) === 'Function') {
					kButton[kendoKey](this.props.bind[propKey]);
				}
				continue outer;
			}
		}
	}
  },
  componentWillUnmount: function() {
    jQuery(this.getDOMNode()).data('kendoButton').destroy();
	jQuery(this.getDOMNode()).empty();
  }
});