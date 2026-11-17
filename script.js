document.addEventListener('DOMContentLoaded', function() {
    
    /*CALCOLATORE PREZZO */
    const btnCalcola = document.getElementById('btnCalcola');
    
    if (btnCalcola) {
        btnCalcola.addEventListener('click', function() {
            
            const prezzoBase = parseFloat(document.getElementById('ticketType').value);
            const quantita = parseInt(document.getElementById('quantity').value);

                  if (isNaN(quantita) || quantita <= 0) {
                alert('Per favore, inserisci un numero valido di persone (maggiore di zero).');
                return;
            }

            const costoTotale = prezzoBase * quantita;

            document.getElementById('totalPrice').innerText = '€' + costoTotale;
        });
    }

    /* PULSANTE "SCOPRI DI PIÙ" */
    const btnEsplora = document.getElementById('btnEsplora');
    const testoApprofondimento = document.getElementById('testoApprofondimento');

    if (btnEsplora && testoApprofondimento) {
        btnEsplora.addEventListener('click', function() {
            testoApprofondimento.classList.toggle('testo-nascosto');
            
            if (testoApprofondimento.classList.contains('testo-nascosto')) {
                btnEsplora.innerText = 'Scopri di più';
            } else {
                btnEsplora.innerText = 'Mostra meno';
            }
        });
    }
});
