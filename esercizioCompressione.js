/*
 * ==============================================
 * ESERCIZIO: TEXT ZIP (COMPRESSIONE)
 * ==============================================
 *
 * OBIETTIVO: Ridurre una stringa indicando quante volte
 * si ripete un carattere consecutivo.
 * Esempio: "aaa" -> "a3"
 *
 * STEP 1: VARIABILI
 *  - Chiedi la stringa all'utente.
 *  - Crea una variabile 'risultato' vuota.
 *  - Crea un 'contatore' inizializzato a 1.
 *
 * STEP 2: CICLO
 *  - Usa un ciclo FOR per scorrere la stringa da 0 a fine.
 *
 * STEP 3: CONFRONTO (Look-ahead)
 *  - Dentro il ciclo, confronta il carattere ATTUALE (i)
 *    con il carattere SUCCESSIVO (i + 1).
 *
 *  - SE SONO UGUALI:
 *    Aumenta il contatore.
 *
 *  - SE SONO DIVERSI (o finisce la stringa):
 *    1. Aggiungi al 'risultato': carattere attuale + contatore.
 *    2. Resetta il contatore a 1 (per il prossimo gruppo).
 *
 * STEP 4: OUTPUT
 *  - Stampa il 'risultato'.
 *
 * ==============================================
 */

const stringaProva = prompt("Dammi una frase");
let arrayProva = [];
// Creiamo un array, nell'array ci andrà il carattere + il numero di volte che appare (tutto nella stessa stringa)
// Entriamo in un ciclo For o do-while
// Se il carattere corrente è diverso dal carattere salvato (che inizializziamo a '')
// Allora salva il carattere corrente; E salvi il contatore dentro l'array;
// Altrimenti incrementi il contatore di quante volte appare quel carattere (sarà inizializzato a 0);
let contatoreCaratteri = 0; // Contatore caratteri
let savedChar = ""; // Carattere che abbiamo salvato
//Log di debug dell'array
// console.log(stringaArray);
//Ciclo for scorre la parola
for (let i = 0; i < stringaProva.length + 1; i++) {
  const currentChar = stringaProva[i]; //Carattere corrente dentro la parola

  if (currentChar !== savedChar) { //Se il crattere corrente è diverso da quello salvato
    if (contatoreCaratteri === 1) { //Se il contatore caratteri è 1
      arrayProva.push(savedChar); // Pusha solo il savedChar senza contatore
    } else if (savedChar !== "") { //Altrimenti se il carattere salvato non è vuoto
      arrayProva.push(savedChar, contatoreCaratteri); //pushalo nell'array, assieme al contatore di caratteri
    }
    savedChar = currentChar; //Salva il carattere corrente
    contatoreCaratteri = 1; //Resetta il contatore a 1
  }
  else { //Altrimenti, se il carattere corrente è uguale al carattere salvato
    contatoreCaratteri++; //Incrementa il contatore caratteri
  }
}
console.log(arrayProva.join(""));

////////////////////////////// 
        // METODO 2 //
/////////////////////////////

/* let stringa = prompt("Inserisci una stringa da comprimere:");
let risultato = "";

let carattereCorrente = stringa[0];
let conteggio = 1;

for (let i = 1; i < stringa.length; i++) {

  if (stringa[i] === carattereCorrente) {
    conteggio++;
  } else {
    if (conteggio === 1) {
      risultato += carattereCorrente;
    } else {
      risultato += carattereCorrente + conteggio;
    }
    carattereCorrente = stringa[i];
    conteggio = 1;
  }
}
if (conteggio === 1) {
  risultato += carattereCorrente;
} else {
  risultato += carattereCorrente + conteggio;
}
console.log("Compresso:", risultato);
*/

////////////////////////////// 
    // DECOMPRESSIONE //
/////////////////////////////
let risultato = ""; //Risultato
for(let i = 0; i < arrayProva.length; i++){ // Facciamo lo scorrimento dell'array
  const currentChar = arrayProva[i]; //Il carattere corrente
  if(typeof(currentChar) == "number"){ //Se è di tipo number
    for(let j = 0; j < currentChar-1; j++){ // facciamo un ciclo che dura quanto il numero - 1
      risultato += arrayProva[i-1]; //Ripetiamo il carattere prima nel numero che abbiamo trovato, quindi ad indice i-1 un numero di volte pari a currentChar - 1
    }
  }
  else{ // Altrimenti
    risultato += currentChar; //Aggiungiamo il carattere singolo
  }
}

console.log(risultato);