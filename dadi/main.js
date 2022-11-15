/* 
Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.Consigli del giorno: :cuoco:
0. Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte?  Se dobbiamo confrontare qualcosa che “cosa” ci serve?
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”NOTE:

    non si usano metodi o propietà diverse da quelle viste insieme questa mattina per gli esercizi;
    la richiesta base richiede che funzioni ma senza intefacce reali e/o output in pagina.
    la repo è una, creerete due sottocartelle nella stessa repo;
    non è detto che entrambi gli esercizi richiedano le cose viste oggi. */


const numUtente = parseInt(Math.floor(Math.random() * 5) +1)  ;
    alert('il tuo numero è: '+ numUtente);
const numCpu = parseInt(Math.floor(Math.random() * 5) +1)  ;
    alert('il  numero della cpu è: ' + numCpu);




// stabilisco se il numero è pari o dispari;




    if (numUtente > numCpu) {
        alert('hai vinto');
        
        
    }

    else if(numUtente < numCpu){
        alert('cpu vince');
    }

    else {
        alert('pareggio')
    }
