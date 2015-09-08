# ReactKendo

### How to use this?

* I assume you already know how to get react.js working, etc.
* Include reactKendo.js from https://github.com/aikeru/ReactKendo/tree/master/dist
* Use elements like ```<reactKendo.Kendo.DatePicker>``` OR alias using
```javascript:
    var Kendo = reactKendo.Kendo;
    <Kendo.DatePicker ...>
```
* Specify bound properties much like the Kendo Knockout project, in a 'bind' property.
```javascript:
    var Kendo = reactKendo.Kendo;
    <Kendo.DatePicker bind={{value:this.state.startDate}}></Kendo.DatePicker>
```
* Look to https://github.com/aikeru/ReactKendo/tree/master/demo for examples
* When you bind values, they are sent directly to the kendo widget, so property names/methods should match 1:1.

### Which widgets are implemented?

Almost all of the kendo widgets are implemented, but not all of them have been thoroughly tested with react bindings. There are bindings defined for the following widgets:

* AutoComplete
* BarCode
* Button
* Calendar
* Chart
* ColorPalette
* ColorPicker
* DatePicker
* DateTimePicker
* Diagram
* Draggable
* DropDownList
* DropTarget
* Editor
* Gantt
* Grid
* LinearGauge
* ListView
* Map
* MaskedTextBox
* Menu
* MobileButtonGroup
* MobileSwitch
* MultiSelect
* Notification
* NumericTextBox
* PanelBar
* Pager
* PivotConfigurator
* PivotGrid
* ProgressBar
* QRCode
* RadialGauge
* ResponsivePanel
* Scheduler
* Slider
* Sortable
* Splitter
* TabStrip
* TimePicker
* ToolBar
* ToolTip
* TreeList
* TreeView
* Window
* Upload

### Why isn't there more source code?

Because implementing a kendo widget wrapper with react is actually REALLY TRIVIAL to do. Testing the different permutations of kendo components and configurations is far more difficult.