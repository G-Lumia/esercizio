// l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// dichiarazione variabili 

const kmTrip = parseInt(prompt("Inserisci i chilometri da percorrere"));
const age= parseInt(prompt("Inserisci la tua età"));;


const travelFee = 0.21;
const youngDiscount = 20;
const oldDiscount = 40;

// calcolo del prezzo totale senza sconti

let price = (kmTrip * travelFee).toFixed(2);

if( (isNaN(age)) || (parseInt(age) < 0) || (parseInt(age) > 110) || (isNaN(kmTrip)) || (parseInt(kmTrip) <= 0))
{
    document.getElementById("message").innerHTML = `I dati inseriti non sono corretti: ricarica la pagina.`;
}
else
{
   if(parseInt(age) < 18)
   {
    price = price - (price / 100 * youngDiscount);
   }
   if(parseInt(age) >= 60) 
   {
    price = price - (price / 100 * oldDiscount);
   }

   document.getElementById("inputAge").innerHTML = `<h5> ${age} </h5>`; 
   document.getElementById("inputKm").innerHTML = `<h5> ${kmTrip} </h5>`; 
   document.getElementById("totalPrice").innerHTML = `<h1> ${price} </h1>`; 
}