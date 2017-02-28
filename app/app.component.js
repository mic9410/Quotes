/**
 * Created by michal on 08.02.17.
 */
(function (app) {

    var Component = ng.core.Component;

    app.AppComponent = Component({
        selector: 'my-app',
        template: `<h1> Hello Angular 2! </h1>
                   <second></second>`

    }).Class({
        constructor: function AppComponent() {
        }
    });

})(window.app || (window.app = {}));