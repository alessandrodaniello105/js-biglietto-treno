const age = parseInt(prompt('Quanti anni hai?'));
const userKm = parseInt(prompt('Quanti km devi percorrere?'));

//3.
const priceKm = 0.21;
const juniorDiscount = 0.2;
const seniorDiscount = 0.4;

//4.
let costTicketNormal, costTicketTotal, message;

costTicketNormal = (userKm * priceKm);

if (age <= 17) {
  costTicketTotal = Math.abs((costTicketNormal * juniorDiscount) - costTicketNormal); 
} else if (age >= 65) {
  costTicketTotal = Math.abs((costTicketNormal * seniorDiscount) - costTicketNormal);
} else {
  costTicketTotal = costTicketNormal;
}

//5.
