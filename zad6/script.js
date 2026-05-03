fetch('dane.json')
    .then(odpowiedz => odpowiedz.json())
    .then(dane => {
        const listaUmiejetnosci = document.getElementById('lista-umiejetnosci');
        dane.umiejetnosci.forEach(umiejetnosc => {
            const elementListy = document.createElement('li');
            elementListy.textContent = umiejetnosc;
            listaUmiejetnosci.appendChild(elementListy);
        });

        const listaProjektow = document.getElementById('lista-projektow');
        dane.projekty.forEach(projekt => {
            const elementListy = document.createElement('li');
            elementListy.textContent = projekt;
            listaProjektow.appendChild(elementListy);
        });
    });
