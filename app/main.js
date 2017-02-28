/**
 * Created by michal on 08.02.17.
 */
(function (app) {

    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
    var AppModule = app.AppModule;

    platformBrowserDynamic.bootstrapModule(AppModule);


})(window.app || (window.app = {}));