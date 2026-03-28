const snackArray = [
    "mars",
    "goleador",
    "snickers",
    "bounty",
    "chocolate"];

let isValueIncluded = false

const snackName = prompt("Inserisci il nome di uno snack");

///// ESERCIZIO 1 /////

for (let i = 0; i < snackArray.length && !isValueIncluded; i++) {
    if (snackName === snackArray[i]) {
        isValueIncluded = true;
    }
}

if (isValueIncluded) {
    console.log(`Lo snack ${snackName} è nella lista`);
}
else{
    console.log(`Lo snack ${snackName} non è nella lista`);
}


///// ESERCIZIO 2 /////
isValueIncluded = false;
let i;
for (i = 0; i < snackArray.length && !isValueIncluded; i++) {
    if (snackName === snackArray[i]) {
        isValueIncluded = true;
    }
}
if (isValueIncluded) {
    console.log(`Lo snack ${snackName} è presente nella lista in posizione ${i}`);
}
else{
    console.log(`Lo snack ${snackName} non è nella lista`);
}


///// ESERCIZIO 3 /////
const numbersArray = [];
let isSomma = false;
let somma = 0;

while (!isSomma) {
    const valueInserted = prompt("Inserisci un numero o SOMMA per fare la somma degli elementi inseriti fino ad ora");

    if (isNaN(Number(valueInserted))) {

        if (valueInserted === "SOMMA" && numbersArray.length !== 0) {
            for (let i = 0; i < numbersArray.length; i++) {
                somma += numbersArray[i];
            }
            isSomma = true;
        }

    } else {
        numbersArray.push(Number(valueInserted));
    }
}

if(isSomma){
    console.log(`La somma degli elementi dell'array è ${somma}`);
}

///// ESERCIZIO 4 /////

const arrayOne = ["ciao", "hi", "come", "stai", "hello"];
const arrayTwo = ["ciao", "come", "domani", "ieri", "oggi"];

const commonArray = [];

let isCommon = false;
for(let i = 0; i < arrayOne.length; i++){
    for(let j = 0; j<arrayTwo.length && !isCommon; j++){
        if(arrayOne[i] === arrayTwo[j]){
            commonArray.push(arrayOne[i]);
            isCommon = true;
        }
    }
    isCommon = false;
}

console.log(`Gli elementi in comune tra ${arrayOne} e ${arrayTwo} sono ${commonArray}`);

///// ESERCIZIO 5 /////

const testArray = [2, "hi", 6, "ciao", 7, 8, 10, "forse"];
let valueToCheck = prompt("Inserisci un valore di cui vuoi controllare la frequenza nell'array");
let counter = 0;

if(!isNaN(Number(valueToCheck))){
    valueToCheck = Number(valueToCheck);
}

for(let i = 0; i < testArray.length; i++){
    if(testArray[i] === valueToCheck){
        counter++;
    }
}

if(counter !== 0){
    console.log(`L'elemento ${valueToCheck} appare nell'array ${testArray} ${counter} volte`);
}
else{
    console.log(`L'elemento ${valueToCheck} non appare nell'array ${testArray}`);
}


///// ESERCIZIO 6 /////
