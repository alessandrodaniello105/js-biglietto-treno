//1.
const age = parseInt(prompt('Quanti anni hai?'));
const userKm = parseInt(prompt('Quanti km devi percorrere?'));

//2.
const priceKm = 0.21;
const juniorDiscount = 0.2;
const seniorDiscount = 0.4;

//3.
let message, costTicketNormal, costTicketTotal;

//4.
//Validazione età e poi km
let kmVerify = Math.sign(userKm);

let ageVerify = Math.sign(age);

if (ageVerify === -1) { //età negativa
  message = "Inserisci un'età vera";
} else if (ageVerify === 0 ) { //età uguale a 0
  message = "Sei appena nato?";
} else if(ageVerify === 1 && kmVerify === -1) { //se età è verificato e km è negativo
  message = "Inserisci una distanza reale";
} else if (ageVerify === 1 && kmVerify === 0) { //se età è verificato e km è 0
  message = "Vuoi restare a casa?";
} else if (ageVerify != 1 || kmVerify != 1) { //se età o km è un campo vuoto
  message = "C'è qualcosa che non va";
} else { //età e km verificati, il programma funziona

  message = "Il costo del tuo biglietto è di ";

  costTicketNormal = (userKm * priceKm);
  
  //5.
  if (age <= 17) {
    costTicketTotal = Math.abs((costTicketNormal * juniorDiscount) - costTicketNormal).toFixed(2);
    message += `
      ${costTicketTotal} €. Ed è stato applicato uno sconto del 20%. <br>
      Il prezzo originale era ${costTicketNormal} €.
    `; 
  } else if (age >= 65) {
    costTicketTotal = Math.abs((costTicketNormal * seniorDiscount) - costTicketNormal).toFixed(2);
    message += `
      ${costTicketTotal} €. Ed è stato applicato uno sconto del 40%. <br>
      Il prezzo originale era ${costTicketNormal} €.
    `; 
  } else {
    costTicketTotal = costTicketNormal;
    message += costTicketTotal + " €.";
  }
}

//6.
document.getElementById('output').innerHTML = message;
