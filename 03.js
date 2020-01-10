//nykyään ei enää suositeltua käyttää var-muuttujaa (globaali muuttuja), eli
//var-muuttujalla ei ole skooppia

//const:illa kiinteät arvot, let:illa muuttuvat arvot
//aina kun voi, kannattaa käyttää const:ia

//luodaan tilaukselle objekti. Paljon kätevämpi kuin erilliset muuttujat!
//paitsi yhdessä objektissa ei voi käyttää useita tyyppeja (const, let). 
let order = {
    id:1234,
    message:"My order",
    delivered:false
}


function summarize_order(id, message, delivered)
{
    // javascriptissa ei ole tarvetta tyypittää, mutta tyyppejä voidaan tutkia tällä:
    typeof(id);

    var summary = "order id: " + id + ", message: " + message + ", delivered: " + delivered;
    return summary;
}

// alaviivojen käyttö muuttujissa yms on nimeltään snake_trail
//vrt. camelCase
var order_summary = summarize_order(order.id, order.message, order.delivered)
console.log(order_summary)

order_delivered = true;
var order_summary_2 = summarize_order(order.id, order.message, order.delivered)
console.log(order_summary_2)

//** CONST-MUUTTUJAN ARVOA EI VOI MUUTTAA, AJOSSA TULEE VIRHEILMOITUS */
// order_id = 111;
// var order_summary_3 = summarize_order(order_id, order_message, order_delivered)
// console.log(order_summary_3)

