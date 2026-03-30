///// LAVATRICE /////

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
