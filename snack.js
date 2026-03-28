/*
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

const testArray = [2, "hi", 6, "ciao", 7, 8, 10, "forse", 10, 10];
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

valueToCheck = prompt("Inserisci un valore che vuoi controllare sia nell'array");
const responseArrayOne = [];
const responseArrayTwo = [];

if(!isNaN(Number(valueToCheck))){
    valueToCheck = Number(valueToCheck);
}

for(let i = 0; i < testArray.length; i++){
    if(valueToCheck === testArray[i]){
        responseArrayOne.push(valueToCheck);
    }else{
        responseArrayTwo.push(testArray[i]);
    }
}

console.log(`Il valore inserito era ${valueToCheck}, nell'array ${testArray}.
L'array con dentro tutti gli elementi diversi da quello inserito è ${responseArrayTwo}.
L'array con dentro tutte le occorenze di ${valueToCheck} è ${responseArrayOne}`);
*/
///// ESERCIZIO 7 /////

const testArrayTwo = [10, 10, 15, 15, 15, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 15, 15, 15, 15, 15, 8, 8, 8, 8];
const counterArray = [];
let counterTwo = 0;
let differentElementFound = false;
let biggestCounter = 0;
let biggestCounterIndex = 0;

for (let i = 0; i < testArrayTwo.length; i++) {
    differentElementFound = false;
    for (let j = i; j <= testArrayTwo.length && !differentElementFound; j++) {
        if (testArrayTwo[i] === testArrayTwo[j]) {
            counterTwo++;
        }
        else {
            counterArray.push([testArrayTwo[i], counterTwo]);
            counterTwo = 0;
            differentElementFound = true;
            i = j - 1;
        }
    }
}

for (let i = 0; i < counterArray.length; i++) {
    let value = counterArray[i][0];
    let count = counterArray[i][1];
    for (let j = i + 1; j < counterArray.length; j++) {
        if (value === counterArray[j][0]) {
            counterArray[i][1] += counterArray[j][1];
            counterArray.splice(j, 1);
        }
    }
}

for(let i = 0; i<counterArray.length; i++){
    console.log(counterArray[i][0], counterArray[i][1]);
}

biggestCounter = counterArray[0][1];
biggestCounterIndex = 0;

for (let i = 0; i < counterArray.length; i++) {

    for (let j = i+1; j < counterArray.length; j++) {
        if (counterArray[j-1][1] < counterArray[j][1]) {
            biggestCounter = counterArray[j][1];
            biggestCounterIndex = j;
        }
    }
}


console.log(`L'elemento che appare più volte nell'array ${testArrayTwo} è ${counterArray[biggestCounterIndex][0]} che appare ${counterArray[biggestCounterIndex][1]} volte`);

///// ESERCIZIO 8 /////

const testArrayThree = [10, 10, 15, 15, 15, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 15, 15, 15, 15, 15, 8, 8, 8, 8, 26, 1, -15];
let max = 0;
let min = testArrayThree[0];

for(let i = 0; i < testArrayThree.length; i++){
    const currentElement = testArrayThree[i];
    if(max < currentElement){
        max = currentElement;
    }
    if(min > currentElement){
        min = currentElement;
    }

}
console.log(`Il valore minimo nell' array ${testArrayThree} è ${min}, mentre il massimo è ${max}`);