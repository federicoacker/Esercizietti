let numero1 = 0; // Dichiaro numero 1
let numero2 = 0; // Dichiaro numero 2

let numero1Valido = false; // Flag booleana di supporto (potrei farne a meno volendo)
let numero2Valido = false; // Flag booleana di supporto (potrei farne a meno volendo)

while(!numero1Valido){ // While la nostra flag è false
    numero1 =  Number(prompt("Inserisci numero 1")); // Chiedi il numero, convertilo in Number e assegnalo a numero1
    numero1Valido = !(isNaN(numero1)); //Controla che numero1 non sia NaN e assegna true alla nostra flag in caso numero1 non sia NaN
}

while (!numero2Valido){ // While la nostra flag è false
    numero2 = Number(prompt("Inserisci numero 2")); // Chiedi il numero, convertilo in Number e assegnalo a numero2
    numero2Valido = !(isNaN(numero2)); //Controla che numero2 non sia NaN e assegna true alla nostra flag in caso numero2 non sia NaN
}

if(numero1Valido && numero2Valido){ //Se entrambe le flag sono true
    console.log(`Il numero più grande tra ${numero1} e ${numero2} è ${Math.max(numero1, numero2)}`); //Dai il massimo tra i due
    numero1Valido = false; //Resetta la flag a false, superfluo essendo un'unica esecuzione ma necessario se ci fossero più esecuzioni in loop (A meno che non inseriamo anche la dichiarazione con inizializziazione delle flag nel loop)
    numero2Valido = false; //Resetta la flag a false, superfluo essendo un'unica esecuzione ma necessario se ci fossero più esecuzioni in loop (A meno che non inseriamo anche la dichiarazione con inizializziazione delle flag nel loop)
}