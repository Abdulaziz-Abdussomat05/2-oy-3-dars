"use strict";

let Person = +prompt("Summani kiriting!")
let ticket = 350;
let living = 680;
let tour = 230; 

let $UZS = 11250;
let Eur = 12864;

let mathUZS = (ticket + living) * $UZS;
let mathEuro = tour * Eur; 

let AllMoney = mathUZS + mathEuro;
console.log(AllMoney);
if(Person >= AllMoney) {
  alert("Oq yo`l")
}else{
  alert(Math.floor(Math.random(3) * (30-0+1)+ 0) + "Kundan keyin xabar oling!")
}



console.log(ticket);