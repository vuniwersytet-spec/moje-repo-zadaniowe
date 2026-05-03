const formularz = document.getElementById('formularz-kontaktowy');
const komunikat = document.getElementById('komunikat-potwierdzenia');

formularz.addEventListener('submit', function(zdarzenie) {
    zdarzenie.preventDefault();

    const wartoscImie = document.getElementById('imie').value;
    const wartoscWiadomosc = document.getElementById('wiadomosc').value;

    const daneDoWyslania = {
        imie: wartoscImie,
        wiadomosc: wartoscWiadomosc
    };

    fetch('http://localhost:3000/zapisz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(daneDoWyslania)
    })
    .then(odpowiedz => odpowiedz.text())
    .then(tekst => {
        komunikat.textContent = tekst;
        komunikat.style.color = "green";
        formularz.reset();
    })
    .catch(blad => {
        komunikat.textContent = "Błąd połączenia z serwerem.";
        komunikat.style.color = "red";
    });
});
