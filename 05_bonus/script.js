/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function hello(nameInput) {
    let hi
    let date = new Date();
    let hour = date.getHours();

    if (hour < 13) {
        hi="buongiorno "
    }
    else if (hour < 17) {
        hi="pomeriggio "
    }
    else {
        hi="buonasera "
    }

    return (hi + nameInput)
}


// Invoca la funzione qui e stampa il risultato in console
console.log(hello(name));




//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.