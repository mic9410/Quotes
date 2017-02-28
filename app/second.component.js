/**
 * Created by michal on 28.02.17.
 */
(function (app) {

    var Component = ng.core.Component;
    var QuoteService = app.QuoteService;


    app.SecondComponent = Component({
        selector: 'second',
        template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
    })
        .Class({
            constructor: [QuoteService, function SecondComponent(quoteService) {
                var self = this;
                quoteService.generateRandomQuotes(2000,function (quote) {
                    self.quote = quote;
                });
            }]
        });



})(window.app || (window.app = {}));