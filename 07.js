// Lisää order-luokalle asynkroninen deliver-metodi. Metodi kestää 1000ms ja muuttaa delivered-muuttujan true:ksi.

//rakennetaan viive
//kun tätä kutsutaan, se odottaa annetun ajan. Kutsukomento on muotoa "await sleep(2000)"
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

//luodaan luokka
class order {
    delivered = false;

    //konstruktori
    constructor(id, message){
        this.id = id;
        this.message = message;
    }

    //node:js:ssä kaikki kulkee yhdessä säikeessä
    // metodista tehdään asynkroninen lisäämällä async
    // ilman asynccia palauttaa stringin
    // asyncilla palautuu lupaus, ja lupaus täyttyy kun työ on tehty
    summarize = async () => {
        //simuloi keinotekoisesti mahdollista viivettä esim. tietokantahaun tai raskaan laskennan kanssa
        // awaittia voi kutsua vain async-funktion sisällä. Muuten tulee virheilmoitus.
        await sleep(2000);
        const summary = "order id: " + this.id + ", message: " + this.message + ", delivered: " + this.delivered;
        return summary;
    }

    deliver = async () => {
        await sleep(1000);
        console.log("Muutetaan deliver-muuttuja true:ksi.");
        this.delivered = true;
    }

}

//luodaan luokasta instanssi, annetaan sille parametreina id ja viesti
let order_object = new order(1123, "Second order");


// kutsu ei jää odottamaan metodin vastausta, vaan askeltaa suoraan läpi.
// Jotta vastaus saadaan, lisätään perään then, joka on callback-funktio
// käytetään nuolisyntaksia (parametrit)=>{koodi}
//summary-parametri voi olla muunkin niminen, vaikka "paluuarvo" tms
order_object.summarize().then((summary)=>{
    console.log(summary);
});

// metodien ketjutusta.....??????
// ketju tehdään .then:illä
order_object.deliver().then(() => {
    console.log("toimitettu");
    return order_object.summarize();
}).then((summary) => {
    console.log(summary)
})
