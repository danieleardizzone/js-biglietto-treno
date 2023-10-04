# calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.



- Chiedere il numero di chilometri da percorrere

- chiedere età del passeggero

- calcolare il prezzo del viaggio:


    - prezzo iniziale = 0.21 * km scelti:

        - SE età < 18 anni:
            - prezzo del viaggio = prezzo iniziale - ((prezzo iniziale / 100) * 20)

        - ALTRIMENTI SE età > 65 anni: 
            - prezzo del viaggio = prezzo iniziale - ((prezzo iniziale / 100) * 40)

        - ALTRIMENTI:
            - prezzo del viaggio = prezzo iniziale

- Stampare il prezzo del biglietto