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
