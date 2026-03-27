let somma = 0; //Dichiaro la variabile in cui inseriremo la somma dei numeri

for(let i = 0; i<10; i++){ //Ciclo for che si ripete 10 volte

    let numeroInserito = NaN; //Dichiaro numeroInserito inizializzandolo come NaN

    while(isNaN(numeroInserito)){//Finché numeroInserito è un NaN
        numeroInserito = Number(prompt(`Inserisci il Numero ${i+1}`));//Chiedi all'utente di darti un numero, convertilo, se NaN, ripeti la domanda
    }//A questo punto numeoInserito è sicuramente un numero

    somma += numeroInserito;//Aggiungi il numeroInserito alla somma
    console.log(`Numero ${i+1}: ${numeroInserito}`);//Stampa il numeroInserito per tenerne traccia nella console
    
}

console.log(`La somma dei numeri inseriti è ${somma}`);//Stampa la somma