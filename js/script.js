document.addEventListener('DOMContentLoaded', () => {
    console.log('asd')
    let nomeEl = document.getElementById('nome')
    let cognomeEl = document.getElementById('cognome')
    let matricolaEl = document.getElementById('matricola')
    let regioneEl = document.getElementById('regione')
    let emailEl = document.getElementById('email')
    let telefonoEl = document.getElementById('telefono')
    let richiesteEl = document.getElementById('richieste')
    
    document.getElementById('form').addEventListener('submit', function(event) {
        if(!onSubmit()) {
            event.preventDefault();
        }
    })
    
    function onSubmit() {
        console.log(window.location)
        if (cognomeEl.value == "") {
            alert('Inserisci il cognome!')
            return false;
        }
        if (nomeEl.value == "") {
            alert('Inserisci il nome!')
            return false;
        }
        if (matricolaEl.value == "") {
            alert('Inserisci la matricola!')
            return false;
        }
        for (let char of matricolaEl.value) {
            if (!'0123456789'.includes(char)) {
                alert('La matricola deve essere un numero!')
                return false;
            }
        }
        if (regioneEl.value == "0") {
            alert('Seleziona una regione')
            return false;
        }
        if (emailEl.value == "" && telefonoEl.value == "") {
            alert('Inserisci almeno un dato tra telefono e email')
            return false;
        }
        alert('Successo')
        return true;
    }
})