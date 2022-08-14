function soundeffect(){
    let sound = document.querySelector('#soundtrackeffect')
    sound.innerHTML = '<audio id="som" src="/componentes/sound2.mp3" autoplay></audio>'
    console.log(sound)
}

function SoundRemove(){
    let som = document.querySelector('#som')
    som.remove()
   
}



let minutos = document.querySelector(".pomo-min");
let segundos = document.querySelector(".pomo-seg");

let ciclos = 0;

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
    let buttonId = document.querySelector('#buttonTask')
    let buttonId2 = document.querySelector('buttonTask2')
    buttonId.style.backgroundColor = "#5e9ca0"
    buttonId2.style.backgroundColor = "#5e9ca0"
}

//funcao que inicia o pomodoro
btnStart.addEventListener("click", function(){
    soundeffect()
    
    
    if(startPomodoro === undefined){
        startPomodoro = setInterval(pomodoroTimer, 1000);
    }
    else{
        alert("O pomodoro já está funcionando!");
    }
    otherButtonStop()
    
});

//funcao que pausa o pomodoro
btnPause.addEventListener("click", function(){
    soundeffect()
    
    clearInterval(startPomodoro);
    startPomodoro = undefined;
    otherButtonStart()
    
});

//funcao que reseta o pomodoro
btnStop.addEventListener("click", function(){
    soundeffect()

    
    clearInterval(startPomodoro);
    startPomodoro = undefined;
    otherButtonStart()
    minutos.textContent = 25;
    segundos.textContent = "00";

    descansoMin.textContent = 5;
    descansoSeg.textContent = "00";
  
    
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
        let ciclos = ciclos + 1
        showPomodoro()

    }
}

let buttonTask = document.querySelector('#buttonTask')




buttonTask.addEventListener("click", function input(){

    
    let inputs =  document.querySelector('#inputs')
    inputs.innerHTML = `<input type="text" id="textTASK" class="inputStyle" placeholder="Qual tarefa voce deseja fazer?">
    <div><button id="btn" class="btn" placeholder="salvar">Adicionar Tarefa</button></div>
    `
    let btn2 = document.querySelector('#btn')

    btn2.addEventListener("click", function(){
        
        
       let taskdiv = document.querySelector('#task2')
       taskdiv.innerHTML = ` <div id="taskAdd">
       <div class="taskStyle 1"><p class="pomo-ciclos">${ciclos}</p></div>
       <div id="dois" class="taskStyle 1 off"><p class="pomo-ciclos">${ciclos}</p></div>
   </div>`
       let taskAdd = document.querySelector('#taskAdd')
       let inptsValue = document.querySelector('#textTASK').value
       let input1 = inptsValue
       taskAdd.children[0].innerText = `${input1}`
       let text = document.querySelector('#textTASK')
      

       if(taskAdd.children[0].textContent == input1){
       

        let inputs =  document.querySelector('#inputs')
        inputs.children[1].innerHTML = `<input type="text" id="textTASK3" class="inputStyle" placeholder="Qual tarefa voce deseja fazer?">
        <div><button id="btn2" class="btn2" placeholder="salvar">Adicionar Tarefa</button></div>`
        let btn3 = document.querySelector('#btn2')
        text.remove()

        btn3.addEventListener("click", function(){
           
            
            let inptsValue2 = document.querySelector('#textTASK3').value
            let input2 = inptsValue2
            let divOff = document.querySelector('#dois')
            divOff.classList.remove('off')
            divOff.classList.add('.on')
            taskAdd.children[1].innerText= `${input2}`
            
           
            let text = document.querySelector('#textTASK3')
          
            text.remove()
            btn2.remove()
            btn3.remove()            
        })

       }

    })                    
});


let btn5 = document.querySelector('#buttonTask2')
btn5.addEventListener("click", function(){
    let taskAdd3 = document.querySelector('#taskAdd')
    taskAdd3.remove()
})








