//nykyään ei enää suositeltua käyttää var-muuttujaa (globaali muuttuja), eli
//var-muuttujalla ei ole skooppia

//const:illa kiinteät arvot, let:illa muuttuvat arvot
//aina kun voi, kannattaa käyttää const:ia

//luodaan luokka
class order {
    delivered = false;

    //konstruktori
    constructor(id, message){
        this.id = id;
        this.message = message;
    }

    //siirretään summarize-funktio luokan sisään
    summarize() {
        var summary = "order id: " + this.id + ", message: " + this.message + ", delivered: " + this.delivered;
        return summary;
    }

    //toinen tapa
    summarize_2 = () => {
        var summary = "order id: " + this.id + ", message: " + this.message + ", delivered: " + this.delivered;
        return summary;
    }

}

//luodaan luokasta instanssi, annetaan sille parametreina id ja viesti
let order_object = new order(1123, "Second order");


// alaviivojen käyttö muuttujissa yms on nimeltään snake_trail
//vrt. camelCase
var order_summary = order_object.summarize();
console.log(order_summary)


order_object.delivered = true;
var order_summary_2 = order_object.summarize_2();
console.log(order_summary_2)

