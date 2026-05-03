const poleTekstowe = document.getElementById('nowa-notatka');
const przyciskDodaj = document.getElementById('przycisk-dodaj');
const listaNotatek = document.getElementById('lista-notatek');

let notatki = JSON.parse(localStorage.getItem('zapisaneNotatki')) || [];

function pokazNotatki() {
    listaNotatek.innerHTML = '';
    
    notatki.forEach(function(notatka, indeks) {
        const elementListy = document.createElement('li');
        elementListy.textContent = notatka;
        
        const przyciskUsun = document.createElement('button');
        przyciskUsun.textContent = 'Usuń';
        przyciskUsun.onclick = function() {
            usunNotatke(indeks);
        };
        
        elementListy.appendChild(przyciskUsun);
        listaNotatek.appendChild(elementListy);
    });
}

function dodajNotatke() {
    const tekst = poleTekstowe.value;
    
    if (tekst !== '') {
        notatki.push(tekst);
        localStorage.setItem('zapisaneNotatki', JSON.stringify(notatki));
        poleTekstowe.value = '';
        pokazNotatki();
    }
}

function usunNotatke(indeks) {
    notatki.splice(indeks, 1);
    localStorage.setItem('zapisaneNotatki', JSON.stringify(notatki));
    pokazNotatki();
}

przyciskDodaj.onclick = dodajNotatke;

pokazNotatki();
