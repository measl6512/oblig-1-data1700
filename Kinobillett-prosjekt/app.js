// array for å lagre billetter
let billetter = [];

//funksjon for å kjøpe en billett
function kjøpBillett() {
    //hent verdier fra inputfeltene
    let film = document.getElementById('film').value;
    let antall = document.getElementById('antall').value;
    let fornavn = document.getElementById('fornavn').value;
    let etternavn = document.getElementById('etternavn').value;
    let telefonnummer = document.getElementById('telefonnummer').value;
    let epost = document.getElementById('epost').value;

    // Validering av input
    let valideringsfeil = false;
    if (film.trim() === '' || isNaN(antall) || antall < 1 || antall > 9 || fornavn.trim() === '' || etternavn.trim() === '' || telefonnummer.trim() === '' || epost.trim() === '') {
        valideringsfeil = true;
        // Merk feltene med valideringsfeil ved å legge til klassen "valideringsfeil"
        if (film.trim() === '') document.getElementById('film').classList.add('valideringsfeil');
        if (isNaN(antall) || antall < 1 || antall > 9) document.getElementById('antall').classList.add('valideringsfeil');
        if (fornavn.trim() === '') document.getElementById('fornavn').classList.add('valideringsfeil');
        if (etternavn.trim() === '') document.getElementById('etternavn').classList.add('valideringsfeil');
        if (telefonnummer.trim() === '') document.getElementById('telefon').classList.add('valideringsfeil');
        if (epost.trim() === '') document.getElementById('epost').classList.add('valideringsfeil');
    }

    // Hvis det er valideringsfeil, vis en feilmelding og avslutt funksjonen
    if (valideringsfeil) {
        alert('Vennligst fyll ut alle feltene korrekt.');
        return;
    }

    // Fjern valideringsfeilklassen fra feltene som nå er fylt ut riktig
    fjernValideringsfeil();

    //lag et billettobjekt og legg til i biletter-arrayet
    let billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnummer: telefonnummer,
        epost: epost
    };
    billetter.push(billett);

    //oppdater visningen
    visBilletter();
    //tøm inputfeltene
    tømInputfelt();

}

//funksjon for å vise alle billetter
function visBilletter() {
    let billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = ''; //Tøm listen først

    //Gå gjennom hvert billettobjekt i billetter-arrayet
    billetter.forEach(billett => {
        let li = document.createElement('li');
        li.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefonnummer: ${billett.telefonnummer}, E-post: ${billett.epost}`;
        billettListe.appendChild(li);
    });

}

// Funksjon for å fjerne valideringsfeilklassen fra alle inputfeltene
function fjernValideringsfeil() {
    let inputFelt = document.querySelectorAll('.valideringsfeil');
    inputFelt.forEach(felt => {
        felt.classList.remove('valideringsfeil');
    });
}

//Funksjon for å slette alle billetter
function slettAlleBilletter() {
    billetter = []; //tøm billetter-arrayet
    visBilletter(); // oppdater visningen
}

//funksjon for å tømme inputfeltene etter kjøp av billetter
function tømInputfelt() {
    document.getElementById('film').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
}