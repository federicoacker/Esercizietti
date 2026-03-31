///// LAVATRICE /////
/*
// VARIABILI
const sockArray = ["rosso", "blu", "verde", "giallo", "rosso", "blu", "verde", "giallo", "rosso", "blu", "verde", "giallo", "rosso", "lilla", "lilla", "blu", "arancio", "verde"]; // Array di partenza
const socksCounted = []; // Array che accumula i calzini uguali

let sockCounter = 1; // Contatore di calzini
let duplicateFound = false; // Flag che ci dice se abbiamo trovato un duplicato nel ciclo di double-check

for (let i = 0; i < sockArray.length; i++){ // Iteriamo attraverso l'array

    duplicateFound = false; // Resettiamo la flag a false
    const currentSock = sockArray[i]; // Variabile di supporto, il calzino corrente

    for(let j = i+1; j < sockArray.length; j++){ // Iteriamo tutti i calzini a destra di quello attuale che stiamo controllando
        const checkedSock = sockArray[j]; // Variabile di supporto, il calzino che stiamo controllando
        if(checkedSock === currentSock){ // Se il calzino corrente è uguale a quello che stiamo controllando
            sockCounter++; // Incrementiamo il counter
        }
    }

    for(let h = 0; !duplicateFound && h < socksCounted.length; h++){ // Iteriamo nell'array dove accumuliamo i calzini
        if(currentSock === socksCounted[h][0]){ // Se il calzino corrente, appare già nell'array dei calzini accumulati
            duplicateFound = true; // Mettiamo duplicateFound a true che ci fa uscire da questo ciclo interno
            sockCounter = 1; // Resettiamo il counter a 1
            continue; // Skippiamo al prossimo currentSock
        }
    }

    if(!duplicateFound){ // Se non abbiamo trovato duplicati nell'array accumulatore
        socksCounted.push([currentSock, sockCounter]); // pushiamo il calzino corrente e il suo counter nell'array accumulatore
    }

    sockCounter = 1; // Resettiamo il counter a 1

}


for(let i = 0; i < socksCounted.length; i++){ // Iteriamo nel nostro array accumulatore
    const currentSock = socksCounted[i][0]; // Variabile di supporto, il colore del calzino
    const sockNumber = socksCounted[i][1]; // Variabile di supporto, il counter del calzino

    if(sockNumber % 2 !== 0){ // Se il counter è dispari
        console.log(`C'è un calzino ${currentSock} spaiato`); // Allora il calzino currentSock è spaiato
    }
}


// Versione alternativa : Metodo degli array paralleli//
const arrayCalzini = ["rosso", "blu", "verde", "giallo", "rosso", "blu", "verde", "giallo", "rosso", "blu", "verde", "giallo", "rosso", "lilla", "lilla", "blu", "arancio", "verde"]; // Array di partenza
const coloriCalzini = []; //Array dove salveremo i colori
const contoCalzini = []; //Array dove salveremo il conto dei calzini

for(let i = 0; i < arrayCalzini.length; i++){
    const calzinoCorrente = arrayCalzini[i]; //Il calzino corrente, nell'array di partenza
    const indiceColoreCalzino = coloriCalzini.indexOf(calzinoCorrente); //Il suo indice, nell'array dei colori
    if(indiceColoreCalzino === -1){ //Se l'indice è -1, allora il calzino corrente non è presente nell'array dei colori
        coloriCalzini.push(calzinoCorrente); //Allora lo pusho dentro
        contoCalzini.push(1); //E pusho nell'array del conto dei calzini che ce n'è uno
    }else { //Altrimenti è presente
        contoCalzini[indiceColoreCalzino] += 1; //Quindi incremento il conto nell'array del conto dei calzini, usando lo stesso indice dei colori
    }
}

for(let i = 0; i < coloriCalzini.length; i++){//Itero usando la lunghezza dell'array del coloreCalzini (Che tanto è la stessa di quella del conto Calzini)
    if(contoCalzini[i] % 2 === 1){// Se un elemento del conto ha modulo di 2 uguale a 1, allora il numero è dispari quindi c'è un calzino spaiato
        console.log(`Il calzino ${coloriCalzini[i]} è spaiato`); //Essendo che i due array vivono in parallelo, agli stessi indici corrispondono il conto per il colore giusto, quindi comunico quali sono spaiati
    }
}
*/
//Versione iniziale con logica di controllo cambiata
const arrayCalzini2 = ["rosso", "blu", "verde", "giallo", "rosso", "blu", "verde", "giallo", "rosso", "blu", "verde", "giallo", "rosso", "lilla", "lilla", "blu", "arancio", "verde"]; // Array di partenza
const arrayContati = [] //Array che accumula i calzini, contandoli

for(let i = 0; i<arrayCalzini2.length; i++){
    const calzinoCorrente = arrayCalzini2[i];
    const indiceCalzinoContato = arrayContati.findIndex(arrayInterno => arrayInterno[0] === calzinoCorrente);
    if(indiceCalzinoContato === -1){
        arrayContati.push([calzinoCorrente, 1]);
    }else{
        arrayContati[indiceCalzinoContato][1] += 1;
    }
}
for(let i = 0; i < arrayContati.length; i++){//Itero usando la lunghezza dell'array del coloreCalzini (Che tanto è la stessa di quella del conto Calzini)
    if(arrayContati[i][1] % 2 === 1){// Se un elemento del conto ha modulo di 2 uguale a 1, allora il numero è dispari quindi c'è un calzino spaiato
        console.log(`Il calzino ${arrayContati[i][0]} è spaiato`); //Essendo che i due array vivono in parallelo, agli stessi indici corrispondono il conto per il colore giusto, quindi comunico quali sono spaiati
    }
}