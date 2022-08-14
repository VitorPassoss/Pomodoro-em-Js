
let minutos = document.querySelector(".pomo-min");
let segundos = document.querySelector(".pomo-seg");

let ciclos = document.querySelector(".pomo-ciclos");

let descansoMin = document.querySelector(".descanso-min");
let descansoSeg = document.querySelector(".descanso-seg");

//pegando os botoes de controle
let btnStart = document.querySelector(".btnplay");
let btnPause = document.querySelector(".btnpause");
let btnStop = document.querySelector(".btnstop");

//variavel que inicia a funcao
let startPomodoro;

function showInterval(){
    let descansoDiv = document.querySelector('.descanso')
    let pomodoroDiv = document.querySelector('.pomodoro-contagem')
    let pomodoroTittle = document.querySelector('.pomodoro-tittle')
    pomodoroDiv.classList.add('pomodoro-contagemNoView')
    descansoDiv.classList.remove('descanso')
    descansoDiv.classList.add('descanso2')
    pomodoroTittle.textContent = "descanso"
}

function showPomodoro(){
    let descansoDiv = document.querySelector('.descanso')
    let pomodoroDiv = document.querySelector('.pomodoro-contagem')
    pomodoroDiv.classList.remove('pomodoro-contagemNoView')
    descansoDiv.classList.remove('descanso2')
    descansoDiv.classList.add('descanso')  
}

function otherButtonStop(){
    let stop = document.querySelector('#stop')
    let start = document.querySelector('#start')
    let pause = document.querySelector('#pause')
    stop.classList.remove('btnstop')
    stop.classList.add('btnstop2')
    start.classList.remove('btnplay')
    start.classList.add('startoff')
    pause.classList.remove('btnpause')
    pause.classList.add('btnpause2')
}

function otherButtonStart(){
    let stop = document.querySelector('#stop')
    let start = document.querySelector('#start')
    let pause = document.querySelector('#pause')
    stop.classList.remove('btnstop2')
    stop.classList.add('btnstop')
    start.classList.remove('startoff')
    start.classList.add('btnplay')
    pause.classList.remove('btnpause2')
    pause.classList.add('btnpause')
}

function trocandoFundo(){
    let body = document.querySelector('body')
    body.classList.add('fundoazul')
    let principal = document.querySelector('#principal')
    principal.style.backgroundColor = "#5e9ca0"
}

//funcao que inicia o pomodoro
btnStart.addEventListener("click", function(){
    
    if(startPomodoro === undefined){
        startPomodoro = setInterval(pomodoroTimer, 1000);
    }
    else{
        alert("O pomodoro já está funcionando!");
    }
    otherButtonStop()
    prevent.default()
});

//funcao que pausa o pomodoro
btnPause.addEventListener("click", function(){
    clearInterval(startPomodoro);
    startPomodoro = undefined;
    otherButtonStart()
});

//funcao que reseta o pomodoro
btnStop.addEventListener("click", function(){
    
    clearInterval(startPomodoro);
    startPomodoro = undefined;
    otherButtonStart()
    minutos.textContent = 25;
    segundos.textContent = "00";

    descansoMin.textContent = 5;
    descansoSeg.textContent = "00";

    ciclos.textContent = 0;


    
});

//funcao principal do pomodoro
function pomodoroTimer(){
    if(segundos.textContent != 0){
        segundos.textContent--;
        document.querySelector('title').innerText = minutos.textContent +':' +segundos.textContent
    }
    else if(minutos.textContent != 0 && segundos.textContent == 0){
        minutos.textContent--;
        segundos.textContent = 59; 
        document.querySelector('title').innerText = minutos.textContent +':'+segundos.textContent
    }

    //descanso
    if(minutos.textContent == 0 && segundos.textContent == 0){
    
        if(descansoSeg.textContent != 0){
           descansoSeg.textContent--;
           showInterval()
           otherButtonStart()
           trocandoFundo()
        }
        else if(descansoMin.textContent != 0 && descansoSeg.textContent == 0){
            descansoSeg.textContent = 59;
            descansoMin.textContent--;
        }
    }

    //ciclos
    if(minutos.textContent == 0 && segundos.textContent == 0 
        && descansoMin.textContent == 0 && descansoSeg.textContent == 0){
        minutos.textContent = 25;
        segundos.textContent = 59;

        descansoSeg.textContent = 59;
        descansoMin.textContent = 5;

        ciclos.textContent++;
        showPomodoro()

    }
}




