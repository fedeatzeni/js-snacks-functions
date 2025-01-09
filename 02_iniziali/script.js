/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetters (array, letter) {
    let arrLetters = []
    // per ogni elemento della lista prende la prima lettera e la mette in un'altra lista
    for (let i = 0; i < array.length; i++) {
        let letter= array[i]
        letter = letter[0]
        arrLetters.push(letter)
    }

    return arrLetters
}


// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetters(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]