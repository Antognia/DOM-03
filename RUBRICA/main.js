// Bottoni Richiama
let mostraContattiBtn = document.querySelector('#mostraContattiBtn');
let aggiungiContattiBtn = document.querySelector('#aggiungiContattiBtn');

// Wrappers

let contactsWrapper = document.querySelector('#contactsWrapper');



// Input

let inputTelefono = document.querySelector('#inputTelefono');
let inputNome = document.querySelector('#inputNome');


// variabile d' appoggio
let check = false;


// Creazione rubrica
const rubrica = {


    listaContatti : [
{nomeContatto: 'Franco', numeroTelefono: 3452265756 },
{nomeContatto: 'Gianni', numeroTelefono: 3452246756 },
{nomeContatto: 'Maria', numeroTelefono: 3453366756 },
{nomeContatto: 'Sara', numeroTelefono: 3452266745 },
    ],

mostraContatti : function (){
    contactsWrapper.innerHTML = '';
    this.listaContatti.forEach((contatto) => {
        let div = document.createElement('div');
        div.classList.add('card','text-white', 'bg-info', 'm-3', 'col-4');
       div.innerHTML= `
                <div class="card-header text-center">Contatto</div>
                <div class="card-body">
                    <h5 class="card-title">${contatto.nomeContatto}</h5>
                    <p class="card-text">${contatto.numeroTelefono}</p>
                    <div class="text-center">
                            <i class="fa-solid fa-trash-can icon-custom text-primary me-5 icon-canc">
                          <span class="descrizione">Cancella</span> </i>
                          <i class="fa-solid fa-user-pen icon-custom text-primary icon-mod">
                              <span class="descrizione">Modifica</span> </i>
                             </i>
                    </div>
                </div>
            `;

contactsWrapper.appendChild(div);
    });


        // Icone

        // Rimuovi Contatto
        let iconsCanc = document.querySelectorAll('.icon-canc'); 

        iconsCanc.forEach((iconCanc, i) =>{
            iconCanc.addEventListener('click', ()=>{
                this.listaContatti.splice(i, 1);
                this.mostraContatti();
                
            });
        });

        // Modifica Contatto

        let iconsMod = document.querySelectorAll('.icon-mod');

        iconsMod.forEach((iconMod, index) => {
            iconMod.addEventListener('click', () =>{
                this.listaContatti[index].nomeContatto = inputNome.value;
                this.listaContatti[index].numeroTelefono = inputTelefono.value;
                this.mostraContatti();
            })
        });


},

// Aggiungi Contatti


 aggiungiContatti : function (nuovoNome, nuovoTelefono) {


    if(nuovoNome && nuovoTelefono){
        this.listaContatti.push({nomeContatto : nuovoNome, numeroTelefono : nuovoTelefono});
    this.mostraContatti();
    if(check == false){

        check = true;
        mostraContattiBtn.innerHTML = 'Nascondi Contatti';
    }
    }else{
        alert('Devi inserire Sia il Nome Sia il Numero!')
    }
},




};



// Bottoni

// Mostra Contatti
mostraContattiBtn.addEventListener('click', ()=>{
if (check === false) {
    rubrica.mostraContatti();
    check = true;
    mostraContattiBtn.innerHTML = 'Nascondi Contatti';
}else{
    check = false;
    mostraContattiBtn.innerHTML = 'Mostra Contatti';
    contactsWrapper.innerHTML = '';
}    
});


// Aggiungi Contatti
aggiungiContattiBtn.addEventListener('click', () => {
    rubrica.aggiungiContatti(inputNome.value, inputTelefono.value);
    if(check == false){
        check = true;
        mostraContattiBtn.innerHTML = 'Nascondi Contatti';
        
        };
});




