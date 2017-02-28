/**
 * Created by michal on 08.02.17.
 */
(function () {

    var Component = ng.core.Component;
    var NgModule =  ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();

    var SecondComponent = Component({
        selector: 'second',
        template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
    })
        .Class({
            constructor : function () {
                var randomIndex = Math.floor(Math.random()*quotes.length);
                this.quote = quotes[randomIndex];
            }
        })


    var AppComponent = Component({
        selector: 'my-app',
        template: `<h1> Hello Angular 2! </h1>
                   <second></second>`

    }).Class({
        constructor: function () {}
    });

    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        bootstrap: [AppComponent]
    }).Class({
            constructor: function(){}
        })

    platformBrowserDynamic.bootstrapModule(AppModule);

    var quotes = [
            {
                'line':"Życie jest jak pudełko czekoladek - nigdy nie wiesz, co ci się trafi.",
                'author':"Forrest Gump"
            },
            {
                'line':" świat się zmienia, słońce zachodzi a wódka się kończy.",
                'author':"Andrzej Sapkowski"
            },
            {
                'line':"Prawo pędzenia bimbru jest prawem człowieka.",
                'author':"Kroniki Jakuba Wędrowycza"
            },
            {
                'line':" Rosjanie maja trzy waluty: ruble, dolary i wódkę.",
                'author':"Władimir Żelwis "
            },
            {
                'line':"Panie Boże, lubiłem dżem truskawkowy/ I ciemną słodycz kobiecego ciała./ Jak też wódkę mrożoną, śledzie w oliwie.",
                'author':"Czesław Miłosz"
            }
        ]

})();