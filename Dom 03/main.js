
// Bottoni
let countdownBtn = document.querySelector('#countdownBtn');
let pauseBtn = document.querySelector('#pauseBtn');
let ResetBtn = document.querySelector('#ResetBtn');

// Input
let timeInput = document.querySelector('#timeInput');

let count;


//Funzioni


//CountDown
function countdown() {
  let seconds = parseInt(timeInput.value);

    if(isNaN(seconds) || seconds <= 0 || seconds > 59){
        alert('Inserisci un Numero valido')
    return;
    };


    count = setInterval(()=>{
         if(seconds <= 0){
            clearInterval(count);
         }else{
            seconds--;
            timeInput.value = seconds;
         }
    }, 1000);


    
    
};


// Pausa
function pause (){
    clearInterval(count);
    
};




// CountDown Bottons
countdownBtn.addEventListener('click', ()=>{
    countdown();
});

pauseBtn.addEventListener('click', () => {
    pause();
});

ResetBtn.addEventListener('click', ()=> {
    clearInterval(count)
    timeInput.value = '';
})

