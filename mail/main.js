/* 
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

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


    var check = 0
    // creo array con mail registrate

    const listMail = [ 'mario@gmail.com', 'gino@gmail.com', 'franco@gmail.com'];
    
    
    // chiedo mail all utente

    var userMail = prompt('inserisci la tua mail');
    
    
    // controllo se la mail è registrata

    for (let i = 0; i < listMail.length; i++) {
        let element = listMail[i];

        if (userMail === element){
            check === 1

        }

        
    
        //stampo controllo
        
       
        
    } 

  
    if (check === 1) {
            alert('puoi entrare');
        }

        else {
            alert('non puoi entrare');
        }

    




    


    