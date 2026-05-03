const express = require('express');
const cors = require('cors');
const fs = require('fs');

const aplikacja = express();
const port = 3000;

aplikacja.use(cors());
aplikacja.use(express.json());

aplikacja.post('/zapisz', (zadanie, odpowiedz) => {
    const noweDane = zadanie.body;

    fs.readFile('baza.json', 'utf8', (blad, zawartoscPliku) => {
        let wszystkieWpisy = [];
        
        if (!blad && zawartoscPliku) {
            wszystkieWpisy = JSON.parse(zawartoscPliku);
        }
        
        wszystkieWpisy.push(noweDane);

        fs.writeFile('baza.json', JSON.stringify(wszystkieWpisy), (bladZapisu) => {
            if (bladZapisu) {
                odpowiedz.status(500).send('Błąd zapisu na serwerze.');
            } else {
                odpowiedz.status(200).send('Dane zostały poprawnie zapisane na serwerze i poza przeglądarką!');
            }
        });
    });
});

aplikacja.listen(port, () => {
    console.log(`Serwer nasłuchuje na porcie ${port}`);
});
