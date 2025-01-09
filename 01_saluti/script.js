/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function hello(name) {
    let hello = ("ciao ")
    return (hello + name);
}

// arrow function
let arrowHello = (name) => {let hello = ("ciao ") ;
return (hello + name);}


// Invoca la funzione qui e stampa il risultato in console
console.log(hello(userName));
console.log(arrowHello(userName));



//Risultato atteso se si passa 'Mario': // ciao Mario
