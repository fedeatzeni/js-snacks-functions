/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function startWhit(array, letter) {
    let arrayWHitLetter = []
    // per ogni elemento della lista prende la prima lettera e se è uguale alla lettera scelta aggiunge il nome ad un'altra lista
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        let firstLetter = name[0]
        if (firstLetter === letter) {
            arrayWHitLetter.push(name)
        }
    }

    return arrayWHitLetter
}

//arrow function 
let arrowStartWhit = (array, letter) =>{
    let arrayWHitLetter = []
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        let firstLetter = name[0]
        if (firstLetter === letter) {
            arrayWHitLetter.push(name)
        }
    }

    return arrayWHitLetter
}

// Invoca la funzione qui e stampa il risultato in console
console.log(startWhit(names, "A"));
console.log(arrowStartWhit(names, "A"));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]