// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21
// BONUS
// Stampa la lunghezza della password che è stata generata

console.log('ciao');

/*
1 inizializzo variabili con nome cognome colore
2 somma
3 stampa video lunghezza password
*/ 

const firstName = prompt('Come ti chiami?');
const surname = prompt('Qual è il tuo cognome?');
const favColor = prompt('Qual  è il tuo colore preferito?');


console.log(firstName);
console.log(surname);
console.log(favColor);

document.getElementById("psw").innerHTML = 
`
Password: ${firstName}${surname}${favColor}
`;

let somma = firstName + surname + favColor;

document.getElementById("lunghezza").innerHTML = somma.length;