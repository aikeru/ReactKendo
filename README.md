# ReactKendo

### How to use this?

* I assume you already know how to get react.js working, etc.
* Include reactKendo.js from https://github.com/aikeru/ReactKendo/tree/master/dist
* Use elements like ```<KendoDatePicker>``` OR alias using
```javascript:
    var Kendo = reactKendo.Kendo;
    <Kendo.DatePicker ...>
```
* Specify bound properties much like the Kendo Knockout project, in a 'bind' property.
```javascript:
    <Kendo.DatePicker bind={{value:this.state.startDate}}></Kendo.DatePicker>
```
* Look to https://github.com/aikeru/ReactKendo/tree/master/demo for examples
* When you bind values, they are sent directly to the kendo widget, so property names/methods should match 1:1.

### Which widgets are implemented?

* kendoDatePicker
* kendoAutoComplete
* kendoButton

### Why isn't there more source code?

Because implementing a kendo widget wrapper with react is actually REALLY TRIVIAL to do. Testing the different permutations of kendo components and configurations is far more difficult.
