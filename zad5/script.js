const nrIndeksu = "12345";

const przyciskMotywu = document.getElementById("przycisk-motywu");
const arkuszStylu = document.getElementById("arkusz-stylu");

przyciskMotywu.addEventListener("click", function() {
    if (arkuszStylu.getAttribute("href") === "red.css") {
        arkuszStylu.setAttribute("href", "green.css");
    } else {
        arkuszStylu.setAttribute("href", "red.css");
    }
});

const przyciskSekcji = document.getElementById("przycisk-sekcji");
const sekcjaProjekty = document.getElementById("sekcja-projekty");

przyciskSekcji.addEventListener("click", function() {
    if (sekcjaProjekty.style.display === "none") {
        sekcjaProjekty.style.display = "block";
    } else {
        sekcjaProjekty.style.display = "none";
    }
});

const formularz = document.getElementById("formularz-kontaktowy");
const poleImie = document.getElementById("imie");
const poleNazwisko = document.getElementById("nazwisko");
const poleEmail = document.getElementById("email");
const poleWiadomosc = document.getElementById("wiadomosc");
const komunikatyBledow = document.getElementById("komunikaty-bledow");
const komunikatSukces = document.getElementById("komunikat-sukces");

formularz.addEventListener("submit", function(zdarzenie) {
    zdarzenie.preventDefault();
    
    komunikatyBledow.innerHTML = "";
    komunikatSukces.innerHTML = "";
    
    let poprawny = true;
    let wiadomoscBledu = "";
    
    const sprawdzCyfry = /\d/;
    const sprawdzEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (poleImie.value === "") {
        wiadomoscBledu = wiadomoscBledu + "Pole Imię jest wymagane.<br>";
        poprawny = false;
    } else if (sprawdzCyfry.test(poleImie.value)) {
        wiadomoscBledu = wiadomoscBledu + "Imię nie może zawierać cyfr.<br>";
        poprawny = false;
    }
    
    if (poleNazwisko.value === "") {
        wiadomoscBledu = wiadomoscBledu + "Pole Nazwisko jest wymagane.<br>";
        poprawny = false;
    } else if (sprawdzCyfry.test(poleNazwisko.value)) {
        wiadomoscBledu = wiadomoscBledu + "Nazwisko nie może zawierać cyfr.<br>";
        poprawny = false;
    }
    
    if (poleEmail.value === "") {
        wiadomoscBledu = wiadomoscBledu + "Pole E-mail jest wymagane.<br>";
        poprawny = false;
    } else if (!sprawdzEmail.test(poleEmail.value)) {
        wiadomoscBledu = wiadomoscBledu + "Podany adres e-mail jest niepoprawny.<br>";
        poprawny = false;
    }
    
    if (poleWiadomosc.value === "") {
        wiadomoscBledu = wiadomoscBledu + "Pole Wiadomość jest wymagane.<br>";
        poprawny = false;
    }
    
    if (poprawny === false) {
        komunikatyBledow.innerHTML = wiadomoscBledu;
    } else {
        komunikatSukces.innerHTML = "Wiadomość została poprawnie przygotowana do wysłania!";
        formularz.reset();
    }
});
