/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowels(wordInput) {

    let arrayVowels = []
    let letters = wordInput.split("");

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
            arrayVowels.push(letters[i])
        }

    }

    return arrayVowels
}


// Invoca la funzione qui e stampa il risultato in console
console.log(vowels(word));




//Risultato atteso se si passa 'javascript': 3 (a, a, i)