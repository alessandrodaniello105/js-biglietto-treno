//1+2
const age = parseInt(prompt('Quanti anni hai?'));
const userKm = parseInt(prompt('Quanti km devi percorrere?'));

//3.
const priceKm = 0.21;
const juniorDiscount = 0.2;
const seniorDiscount = 0.4;

//4.
let message, costTicketNormal, costTicketTotal;

message = "Il costo del tuo biglietto è di ";

costTicketNormal = (userKm * priceKm);

//5.
if (age <= 17) {
  costTicketTotal = Math.abs((costTicketNormal * juniorDiscount) - costTicketNormal).toFixed(2);
  message += costTicketTotal + " €. Ed è stato applicato uno sconto del 20%.";
} else if (age >= 65) {
  costTicketTotal = Math.abs((costTicketNormal * seniorDiscount) - costTicketNormal).toFixed(2);
  message += costTicketTotal + " €. Ed è stato applicato uno sconto del 40%.";
} else {
  costTicketTotal = costTicketNormal;
  message += costTicketTotal + " €.";
}

//6.
document.getElementById('output').innerHTML = message;
