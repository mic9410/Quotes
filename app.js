/**
 * Created by michal on 08.02.17.
 */
(function () {

    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
    var Class = ng.core.Class;

    var QuoteService = Class({
        constructor: function QuoteService() {
            this.quotes = quotes2;
        },

        getRandomQuote: function () {
            var randomIndex = Math.floor(Math.random() * this.quotes.length);
            return this.quotes[randomIndex];
        },

        generateRandomQuotes: function(delay, callback){
            var self = this;
            callback(this.getRandomQuote());
            setInterval(function(){
                callback(self.getRandomQuote());
            }, delay);
        }
    })

    var TestService = Class({
        constructor: function () {
        },
        getRandomQuote: function () {
            return {
                line: 'Cytat testowy - OK.',
                author: 'Autor testowy.'
            };
        }
    });

    var SecondComponent = Component({
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


    var AppComponent = Component({
        selector: 'my-app',
        template: `<h1> Hello Angular 2! </h1>
                   <second></second>
                   <second></second>`

    }).Class({
        constructor: function AppComponent() {
        }
    });

    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        providers: [
            {
                provide: QuoteService, useClass: QuoteService
            }
        ],
        bootstrap: [AppComponent]
    }).Class({
        constructor: function () {
        }
    })

    platformBrowserDynamic.bootstrapModule(AppModule);

    var quotes2 = [
        {
            'line': "Życie jest jak pudełko czekoladek - nigdy nie wiesz, co ci się trafi.",
            'author': "Forrest Gump"
        },
        {
            'line': " świat się zmienia, słońce zachodzi a wódka się kończy.",
            'author': "Andrzej Sapkowski"
        },
        {
            'line': "Prawo pędzenia bimbru jest prawem człowieka.",
            'author': "Kroniki Jakuba Wędrowycza"
        },
        {
            'line': " Rosjanie maja trzy waluty: ruble, dolary i wódkę.",
            'author': "Władimir Żelwis "
        },
        {
            'line': "Panie Boże, lubiłem dżem truskawkowy/ I ciemną słodycz kobiecego ciała./ Jak też wódkę mrożoną, śledzie w oliwie.",
            'author': "Czesław Miłosz"
        }
    ]

})();