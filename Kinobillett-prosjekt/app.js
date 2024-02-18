let billettene = [];  //gjør om arrayet fra kjøpBillett funksjonen global for å hente den til slettBillett funksjonen.

    function kjopBillett() {

        //Lager variabler ved å hente inn value fra html taggene jeg har laget.
        let valgtFilm = document.getElementById("filmer").value;
        let valgteBilletter = document.getElementById("antallBillett").value;
        let valgtFornavn = document.getElementById("velgFornavn").value;
        let valgtEtternavn = document.getElementById("velgEtternavn").value;
        let valgtTelefonnr = document.getElementById("velgtlfNr").value;
        let valgtEpost = document.getElementById("velgEpost").value;

        const billett1 = {     //Lager et objekt og setter inn lagde variabler.
            film: valgtFilm,
            antall: valgteBilletter,
            fornavn: valgtFornavn,
            etternavn: valgtEtternavn,
            telefonnummer: valgtTelefonnr,
            epost: valgtEpost
        };

        if(billett1.antall === ""){
            document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall";
        }
        else{
            document.getElementById("feilAntall").innerHTML = "";
        }
        if(billett1.fornavn === ""){
            document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavn";
        }
        else{
            document.getElementById("feilFornavn").innerHTML = "";
        }
        if(billett1.etternavn === ""){
            document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i etternavn";
        }
        else {
            document.getElementById("feilEtternavn").innerHTML = "";
        }
        if(billett1.telefonnummer === ""){
            document.getElementById("feilTlfnr").innerHTML = "Må skrive noe inn i telefonnummer";
        }
        else {
            document.getElementById("feilTlfnr").innerHTML = "";
        }
        if(billett1.epost === ""){
            document.getElementById("feilEpost").innerHTML = "Må skrive noe inn i epost";
        }
        else {
            document.getElementById("feilEpost").innerHTML = "";
        }

        billettene.push(billett1); // pusher/setter inn objektet vi laget inn i arrayet.
        skrivUt();

        //Henter verdiene som oppe uten å sette det til noen variabler. Setter to hermetegn for å blanke de ut.
        document.getElementById("filmer").value = "";
        document.getElementById("antallBillett").value = "";
        document.getElementById("velgFornavn").value = "";
        document.getElementById("velgEtternavn").value = "";
        document.getElementById("velgtlfNr").value = "";
        document.getElementById("velgEpost").value = "";

    }
    function skrivUt() { //kjører gjennom en for-løkke for å skrive ut verdier vi har laget i objektet og satt inn i arrayet.
        let ut = "";
        for (let i = 0; i < billettene.length; i++) {
            ut += billettene[i].film + " " + billettene[i].antall + " " + billettene[i].fornavn
                + " " + billettene[i].etternavn + " " + billettene[i].telefonnummer +
                " " + billettene[i].epost;
        }
        document.getElementById("utskrift").innerHTML = ut;
    }
    function slettBillett() {

        billettene = [];  //tømmer arrayet ved å sette den tom.
        console.log(billettene); //sjekker i konsollen og får da et tom array når jeg trykker slett billett.
        skrivUt(); /*kaller på metoden som skriver ut, etter å ha tømt arrayet. Da sletter jeg også teksten som tilhører
                    den slettede billetten. */
    }
</script>

</body>
</html>
