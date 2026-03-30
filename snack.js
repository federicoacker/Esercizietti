// Variabili usate in più esercizi
/*
const snackArray = [ //Array di Snack
    "mars",
    "goleador",
    "snickers",
    "bounty",
    "chocolate"];

let isValueIncluded = false //Flag per vedere se il valore è incluso

const snackName = prompt("Inserisci il nome di uno snack"); // prompt dove chiede all'utente di inserire il nome di uno snack

///// ESERCIZIO 1 /////

for (let i = 0; i < snackArray.length && !isValueIncluded; i++) { // Iteriamo nell'array disnack
    if (snackName === snackArray[i]) { // Se lo snack è nell'array
        isValueIncluded = true; // Allora mettiamo la flag a true, che ci farà uscire dall'array
    }
}

if (isValueIncluded) { // se il valore è incluso
    console.log(`Lo snack ${snackName} è nella lista`); // Allora lo comunichiamo all'utente
} 
else{ // Altrimenti
    console.log(`Lo snack ${snackName} non è nella lista`); // Comunichiamo all'utente la mancanza dello snack nell'array
}


///// ESERCIZIO 2 /////
isValueIncluded = false; // resettiamo la flag a false
let i; // definiamo i qui in modo da conservarcela
for (i = 0; i < snackArray.length && !isValueIncluded; i++) { // iteriamo nell'array
    if (snackName === snackArray[i]) { // se il valore c'è
        isValueIncluded = true; // allora la flag è vera e usciamo dal ciclo
    }
}
if (isValueIncluded) { // se il valore è incluso nell'array
    console.log(`Lo snack ${snackName} è presente nella lista in posizione ${i}`); // diciamo all'utente che lo snack c'è e in che posizione è 
}
else{ // altrimenti
    console.log(`Lo snack ${snackName} non è nella lista`); // gli diciamo che non c'è
}


///// ESERCIZIO 3 /////
const numbersArray = []; // definiamo un array di numbers
let isSomma = false; // una flag per sapere quando l'utente avrà inserito la parola "SOMMA"
let somma = 0; // inizializziamo la somma a 0

while (!isSomma) { //Finché l'utente non inserisce SOMMA
    const valueInserted = prompt("Inserisci un numero o SOMMA per fare la somma degli elementi inseriti fino ad ora"); //Continuiamo a chiedergli di inserire un numero o SOMMA

    if (isNaN(Number(valueInserted))) { // Se quello che inserisce non è un numero

        if (valueInserted === "SOMMA" && numbersArray.length !== 0) { // Controlliamo se abbia inserito SOMMA e se la lunghezza dell'array dei numeri sia diversa da 0
            for (let i = 0; i < numbersArray.length; i++) { // Nel caso in cui lo sia, iteriamo nell'array di numeri
                somma += numbersArray[i]; // calcoliamo la somma
            }
            isSomma = true; // settiamo la flag a true ed usciamo dal ciclo while
        }

    } else { // altrimenti ciò che ha inserito è un numero
        numbersArray.push(Number(valueInserted)); // Quindi lo mettiamo nell'array ma rimaniamo nel ciclo while
    }
}

if(isSomma){ // se la flag della somma è true
    console.log(`La somma degli elementi dell'array è ${somma}`); // restituiamo all'utente il valore della somma
}

///// ESERCIZIO 4 /////

const arrayOne = ["ciao", "hi", "come", "stai", "hello"]; // primo array da usare per la prova
const arrayTwo = ["ciao", "come", "domani", "ieri", "oggi"]; // secondo array da usasre per la prova

const commonArray = []; // array dei valori in comune

let isCommon = false; // flag per vedere se l'elemento è in comune
for(let i = 0; i < arrayOne.length; i++){ // iteriamo nel primo array
    for(let j = 0; j<arrayTwo.length && !isCommon; j++){ // iteriamo nel secondo array, controllando anche la nostra condizione di uscita (un elemento è in comune)
        if(arrayOne[i] === arrayTwo[j]){ // se l'elemento i del primo array è uguale all'elemento j del secondo array
            commonArray.push(arrayOne[i]); // metti dentro l'array dei valori comuni l'elemento del primo array
            isCommon = true; // setta la flag a true ed esci dal ciclo interno
        }
    }
    isCommon = false; // ora nel ciclo esterno, risettiamo la flag a false
}
// in un mondo ideale anche qui andrei a fare una scrematura per togliere elementi duplicati dall'array dei valori comuni
console.log(`Gli elementi in comune tra ${arrayOne} e ${arrayTwo} sono ${commonArray}`); // stampiamo i risultati

///// ESERCIZIO 5 /////

const testArray = [2, "hi", 6, "ciao", 7, 8, 10, "forse", 10, 10]; // Array di prova
let valueToCheck = prompt("Inserisci un valore di cui vuoi controllare la frequenza nell'array"); // Inserimento del valore di cui controllare la frequenza nell'array
let counter = 0; // Counter

// Non sappiamo a questo punto cosa c'è nell'array quindi controlliamo se si tratta di un numero

if(!isNaN(Number(valueToCheck))){ // Se provando a convertirlo in un numero, non è un NaN
    valueToCheck = Number(valueToCheck); // Allora lo convertiamo in numero
}

for(let i = 0; i < testArray.length; i++){ // Iteriamo nell'array di prova
    if(testArray[i] === valueToCheck){ // Controlliamo se l'elemento è presente nell'array, se lo è
        counter++; // Aumentiamo il counter
    }
}

if(counter !== 0){ // Se il counter è diverso da 0
    console.log(`L'elemento ${valueToCheck} appare nell'array ${testArray} ${counter} volte`); // Comunichiamo quante volte appare l'elelemnto
} 
else{ // Se il counter è 0
    console.log(`L'elemento ${valueToCheck} non appare nell'array ${testArray}`); // Comunichiamo che l'elemento non è presente nell'array
}


///// ESERCIZIO 6 /////

valueToCheck = prompt("Inserisci un valore che vuoi controllare sia nell'array"); // Chiediamo all'utente quale valore vuole controllare sia incluso nell'array
const responseArrayOne = []; // Creiamo un array in cui metteremo gli elementi uguali a quello inserito dall'utente
const responseArrayTwo = []; // Creiamo un array in cui metteremo gli elementi diversi da quello inserito dall'utente

if(!isNaN(Number(valueToCheck))){ // Facciamo sempre il controllo se il valore inserito è un numero o meno
    valueToCheck = Number(valueToCheck); // Se lo è lo convertiamo a un Number
}

for(let i = 0; i < testArray.length; i++){ // Iteriamo nell'array
    if(valueToCheck === testArray[i]){ // Se il valore è presente nell'array
        responseArrayOne.push(valueToCheck); // Lo pushiamo nell'array degli elementi uguali a quello inserito dall'utente
    }else{ // Altrimenti
        responseArrayTwo.push(testArray[i]); // Pushiamo l'elemento dell'array di prova, che è diverso da quello inserito dall'utente, dentro l'array degli elementi diversi
    }
}

console.log(`Il valore inserito era ${valueToCheck}, nell'array ${testArray}. 
L'array con dentro tutti gli elementi diversi da quello inserito è ${responseArrayTwo}.
L'array con dentro tutte le occorenze di ${valueToCheck} è ${responseArrayOne}`); // Logghiamo il risultato in console.

///// ESERCIZIO 7 /////
// Variabili
const testArrayTwo = [10, 10, 15, 15, 15, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 15, 15, 15, 15, 15, 8, 8, 8, 8]; // Array di prova
const counterArray = []; //Array accumulatore dei counter
let counterTwo = 0; // Counter
let differentElementFound = false; //Flag, se viene trovato un elemento differente
let biggestCounter = 0; // Il counter più grande
let biggestCounterIndex = 0; // L'indice equivalente al counter più grande

for (let i = 0; i < testArrayTwo.length; i++) { // Iteriamo nell'array
    differentElementFound = false; // Settiamo la flag a false
    for (let j = i; j <= testArrayTwo.length && !differentElementFound; j++) { // Iteriamo da j = i fino a j <= della lunghezza dell'array, controllando di non trovare un elemento differente
        if (testArrayTwo[i] === testArrayTwo[j]) { // se il numero che stiamo controllando nel ciclo esterno, è uguale al numero nel ciclo interno
            counterTwo++; // incrementiamo il counter
        }
        else { // altrimenti
            counterArray.push([testArrayTwo[i], counterTwo]); // pushiamo il numero del ciclo esterno, assieme al suo counter, nell'array accumulatore
            counterTwo = 0; // resettiamo il counter a 0
            differentElementFound = true; // settiamo la flag a true che ci farà uscire da questo ciclo
            i = j - 1; // settiamo i a j-1 in modo da continuare il ciclo esterno dalla posizione giusta.
        }
    }
}
// A questo punto, nel nostro array ci potrebbero essere però valori duplicati, ad esempio se l'array fosse 
//  [10, 10, 15, 15, 15, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 15, 15, 15, 15, 15, 8, 8, 8, 8]
// il nostro array accumulatore sarebbe:
// [[10, 2], [15, 3], [8,7], [3, 3], [15, 5], [8, 4]]
// Dobbiamo quindi accumulare i numeri uguali in un unico elemento e sommare i loro contatori

for (let i = 0; i < counterArray.length; i++) { // Iteriamo l'array accumulatore
    let value = counterArray[i][0]; // Variabile di supporto, il numero 
    let count = counterArray[i][1]; // Variabile di supporto, il counter di quel numero
    for (let j = i + 1; j < counterArray.length; j++) { // Iteriamo tutti gli elementi a destra di quello che stiamo controllando
        if (value === counterArray[j][0]) { // se il numero è uguale al numero di un'altro valore dell'array
            counterArray[i][1] += counterArray[j][1]; // allora sommiamo i counter
            counterArray.splice(j, 1); // ed eliminiamo il duplicato dal nostro array accumulatore
        }
    }
}

// A questo punto il nostro array accumulatore sarà diventato
// [[10, 2], [15, 8], [8, 11], [3, 3]]

// Check di debugging per controllare l'array accumulatore
// for(let i = 0; i<counterArray.length; i++){
//     console.log(counterArray[i][0], counterArray[i][1]);
// }

biggestCounter = counterArray[0][1]; //impostiamo il biggestCounter inizialmente al counter dell'elemento 0 dell'array accumulatore
biggestCounterIndex = 0; // impostiamo l'index a 0

for (let i = 0; i < counterArray.length; i++) { // iteriamo nell'array accumulatore

    for (let j = i+1; j < counterArray.length; j++) { // iteriamo tutti gli elementi a destra di quello corrente
        if (counterArray[i][1] < counterArray[j][1]) { // se il counter dell'elemento i è minore del counter dell'elemento j
            biggestCounter = counterArray[j][1]; // il counter più grande è quello di j
            biggestCounterIndex = j; // l'indice di questo counter è j
        }
    }
}


console.log(`L'elemento che appare più volte nell'array ${testArrayTwo} è ${counterArray[biggestCounterIndex][0]} che appare ${counterArray[biggestCounterIndex][1]} volte`); // Logghiamo i valori

///// ESERCIZIO 8 /////
// Variabili
const testArrayThree = [10, 10, 15, 15, 15, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 15, 15, 15, 15, 15, 8, 8, 8, 8, 26, 1, -15]; // Array di prova
let max = 0; // Massimo
let min = testArrayThree[0]; // Minimo

for(let i = 0; i < testArrayThree.length; i++){ // Iteriamo nell'array
    const currentElement = testArrayThree[i]; // Variabile di supporto, il numero corrente
    if(max < currentElement){ // se il massimo è minore del numero corrente
        max = currentElement; // allora il massimo è il minimo corrente
    }
    if(min > currentElement){ // se il minimo è maggiore del numero corrente
        min = currentElement; // allora il minimo è il numero corrente
    }

}
console.log(`Il valore minimo nell' array ${testArrayThree} è ${min}, mentre il massimo è ${max}`); // Logghiamo i valori di massimo e minimo
*/

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



