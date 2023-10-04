// # calcolo del prezzo del biglietto del treno

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



// - Chiedere il numero di chilometri da percorrere
const chilometri = prompt ('Inserisci il numero di chilometri da percorrere');
// - chiedere età del passeggero
const eta = prompt ('Inserisci la tua età');

console.log(chilometri, eta)
// - calcolare il prezzo del viaggio:
//     - prezzo iniziale = 0.21 * km scelti:
const firstPrice = 0.21 * chilometri;
console.log('Prezzo iniziale = ' + firstPrice);


let finalPrice
let discountDomElement = document.getElementById('discount')
//         - SE età < 18 anni:
//             - prezzo del viaggio = prezzo iniziale - ((prezzo iniziale / 100) * 20)
if (eta < 18){
    finalPrice = firstPrice - ((firstPrice / 100) * 20);
    console.log('Sconto del 20%')

    discountDomElement.innerHTML = ('prevede uno sconto del 20%')
}

//         - ALTRIMENTI SE età > 65 anni: 
//             - prezzo del viaggio = prezzo iniziale - ((prezzo iniziale / 100) * 40)
else if (eta >= 65){
    finalPrice = firstPrice - ((firstPrice / 100) * 40);
    console.log('Sconto del 40%')

    discountDomElement.innerHTML = ('prevede uno sconto del 40%')
}

//         - ALTRIMENTI:
//             - prezzo del viaggio = prezzo iniziale
else{
    finalPrice = firstPrice;
    console.log('Nessuno sconto previsto')

    discountDomElement.innerHTML = ('non prevede uno sconto')
}

// - Stampare il prezzo del biglietto
// ARROTONDAMENTO DEL NUMERO
// con la funzione Mark.round togliamo tutti i numeri dopo la virgola,
// ma nel nostro caso recuperiamo prima i primi due numeri sopo la virgola con finalPrice*100
// e poi togliamo con la funzione i numeri dopo la virgola
// infine ci basta dividere il risultato per 100 e avremo due numeri decimali

finalPrice = Math.round(finalPrice * 100) / 100;

console.log('Il prezzo finale è = ' + finalPrice);

const ticketPriceDomElement = document.getElementById('ticketPrice')
ticketPriceDomElement.innerHTML = finalPrice