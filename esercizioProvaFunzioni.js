function containsOnlyNumbers (stringaIniziale){ //Funzione che controlla se tutti i valori di una stringa sono numeri. 
// Ritorna true or false, o -1 se l'argomento ricevuto non è una stringa.
    let onlyNumbers = true; // Booleano che usiamo per controllare che siano solo numeri
    if(typeof(stringaIniziale) !== "string"){ // Se il tipo di stringaIniziale non è "string"
        if(typeof(stringaIniziale) === "number" && !isNaN(stringaIniziale)){ // Se il tipo di stringaIniziale è un number e non è NaN
            return onlyNumbers; //Allora ritorniamo true
        }
        else{ //Altrimenti è un tipo di cui non possiamo controllare che contenga solo numeri (un tipo complesso o un booleano)
            return -1; // Allora ritorniamo -1
        }
        //Volendo potremmo implementare un'ulteriore condizione che controlla che sia un array, e in quel caso implementare la logica che controlli
        // l'array per vedere se contiene solo numeri   
    }
    else{ // Altrimenti
        for(let i = 0; i<stringaIniziale.length && onlyNumbers; i++){ // Itera nella stringa
            const currentNumber = Number(stringaIniziale[i]); // il numero corrente, proviamo a convertire in Number il char della stringa
            if(!isNaN(currentNumber)){  // Se non è NaN
                onlyNumbers = true; // Allora setta onlyNumbers a true, questo rimarrà true finché non viene trovato un carattere che non è un number
            }
            else{ // Se il carattere convertito in Number da NaN, allora non è un number
                onlyNumbers = false; // Settiamo la flag a false, che ci farà uscire dal ciclo vista la condizione
            }
        }
    }
    return onlyNumbers; // A questo punto restituiamo il risultato
}

const stringa = 5;

console.log(containsOnlyNumbers(stringa));