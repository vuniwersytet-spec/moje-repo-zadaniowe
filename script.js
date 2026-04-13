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
