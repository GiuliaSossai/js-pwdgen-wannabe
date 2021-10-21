/*
1 inizializzo variabili con nome cognome colore
2 somma
3 stampa video lunghezza password
*/ 

const firstName = prompt('Come ti chiami?');
const surname = prompt('Qual è il tuo cognome?');
const favColor = prompt('Qual  è il tuo colore preferito?');

const password = firstName+surname+favColor+21;


console.log(firstName);
console.log(surname);
console.log(favColor);

//metodo letterale ma più lungo:
// document.getElementById("psw").innerHTML = 
// `
// Password: ${firstName}${surname}${favColor}21
// `;

document.getElementById("psw").innerHTML = password;


let somma = password;
document.getElementById("lunghezza").innerHTML = somma.length;