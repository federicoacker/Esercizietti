let stringa1 = ''; //Dichiaro stringa1
let stringa2 = ''; //Dichiaro stringa2

while(stringa1 === ''){ //Finché stringa1 è vuota
    stringa1 = prompt("Inserisci la prima parola"); //Chiedo stringa1 e la assegno
}
while(stringa2 === ''){ //Finché stringa2 è vuota
    stringa2 = prompt("Inserisci la seconda parola"); //Chiedo stringa2 e la assegno
}

const stringa1Length = stringa1.length; //Mi salvo la lunghezza di stringa1
const stringa2Length = stringa2.length; //Mi salvo la lunghezza di stringa2

console.log(
    (stringa1Length > stringa2Length) //Se stringa 1 è più lunga di stringa 2
    ? stringa1 //Allora stampa stringa1
    : (stringa1Length === stringa2Length) //Altrimenti se hanno lunghezza uguale
    ? `Le parole ${stringa1} e ${stringa2} hanno la stessa lunghezza` //Avvisa che le 2 parole hanno la stessa lunghezza
    : stringa2 //Altrimenti stampa stringa 2
);

console.log(
    (stringa1Length > stringa2Length) //Se stringa 1 è più lunga di stringa 2
    ? stringa2 //Allora stampa stringa 2
    : (stringa1Length === stringa2Length) //Altrimenti se hanno lunghezza uguale 
    ? `Le parole ${stringa1} e ${stringa2} hanno la stessa lunghezza` //Avvisa che le 2 parole hanno la stessa lunghezza
    : stringa1 //Altrimenti stampa stringa 2
);