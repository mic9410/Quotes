/**
 * Created by michal on 08.02.17.
 */
(function (app) {

    var Class = ng.core.Class;

    app.QuoteService = Class({
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
    });


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
    ];

})(window.app || (window.app = {}));