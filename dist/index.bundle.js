/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("let minutos = document.querySelector(\".pomo-min\");\nlet segundos = document.querySelector(\".pomo-seg\");\nlet ciclos = document.querySelector(\".pomo-ciclos\");\nlet descansoMin = document.querySelector(\".descanso-min\");\nlet descansoSeg = document.querySelector(\".descanso-seg\"); //pegando os botoes de controle\n\nlet btnStart = document.querySelector(\".btnplay\");\nlet btnPause = document.querySelector(\".btnpause\");\nlet btnStop = document.querySelector(\".btnstop\"); //variavel que inicia a funcao\n\nlet startPomodoro;\n\nfunction showInterval() {\n  let descansoDiv = document.querySelector('.descanso');\n  let pomodoroDiv = document.querySelector('.pomodoro-contagem');\n  let pomodoroTittle = document.querySelector('.pomodoro-tittle');\n  pomodoroDiv.classList.add('pomodoro-contagemNoView');\n  descansoDiv.classList.remove('descanso');\n  descansoDiv.classList.add('descanso2');\n  pomodoroTittle.textContent = \"descanso\";\n}\n\nfunction showPomodoro() {\n  let descansoDiv = document.querySelector('.descanso');\n  let pomodoroDiv = document.querySelector('.pomodoro-contagem');\n  pomodoroDiv.classList.remove('pomodoro-contagemNoView');\n  descansoDiv.classList.remove('descanso2');\n  descansoDiv.classList.add('descanso');\n}\n\nfunction otherButtonStop() {\n  let stop = document.querySelector('#stop');\n  let start = document.querySelector('#start');\n  let pause = document.querySelector('#pause');\n  stop.classList.remove('btnstop');\n  stop.classList.add('btnstop2');\n  start.classList.remove('btnplay');\n  start.classList.add('startoff');\n  pause.classList.remove('btnpause');\n  pause.classList.add('btnpause2');\n}\n\nfunction otherButtonStart() {\n  let stop = document.querySelector('#stop');\n  let start = document.querySelector('#start');\n  let pause = document.querySelector('#pause');\n  stop.classList.remove('btnstop2');\n  stop.classList.add('btnstop');\n  start.classList.remove('startoff');\n  start.classList.add('btnplay');\n  pause.classList.remove('btnpause2');\n  pause.classList.add('btnpause');\n}\n\nfunction trocandoFundo() {\n  let body = document.querySelector('body');\n  body.classList.add('fundoazul');\n  let principal = document.querySelector('#principal');\n  principal.style.backgroundColor = \"#5e9ca0\";\n} //funcao que inicia o pomodoro\n\n\nbtnStart.addEventListener(\"click\", function () {\n  if (startPomodoro === undefined) {\n    startPomodoro = setInterval(pomodoroTimer, 1000);\n  } else {\n    alert(\"O pomodoro já está funcionando!\");\n  }\n\n  otherButtonStop();\n  prevent.default();\n}); //funcao que pausa o pomodoro\n\nbtnPause.addEventListener(\"click\", function () {\n  clearInterval(startPomodoro);\n  startPomodoro = undefined;\n  otherButtonStart();\n}); //funcao que reseta o pomodoro\n\nbtnStop.addEventListener(\"click\", function () {\n  clearInterval(startPomodoro);\n  startPomodoro = undefined;\n  otherButtonStart();\n  minutos.textContent = 25;\n  segundos.textContent = \"00\";\n  descansoMin.textContent = 5;\n  descansoSeg.textContent = \"00\";\n  ciclos.textContent = 0;\n}); //funcao principal do pomodoro\n\nfunction pomodoroTimer() {\n  if (segundos.textContent != 0) {\n    segundos.textContent--;\n    document.querySelector('title').innerText = minutos.textContent + ':' + segundos.textContent;\n  } else if (minutos.textContent != 0 && segundos.textContent == 0) {\n    minutos.textContent--;\n    segundos.textContent = 59;\n    document.querySelector('title').innerText = minutos.textContent + ':' + segundos.textContent;\n  } //descanso\n\n\n  if (minutos.textContent == 0 && segundos.textContent == 0) {\n    if (descansoSeg.textContent != 0) {\n      descansoSeg.textContent--;\n      showInterval();\n      otherButtonStart();\n      trocandoFundo();\n    } else if (descansoMin.textContent != 0 && descansoSeg.textContent == 0) {\n      descansoSeg.textContent = 59;\n      descansoMin.textContent--;\n    }\n  } //ciclos\n\n\n  if (minutos.textContent == 0 && segundos.textContent == 0 && descansoMin.textContent == 0 && descansoSeg.textContent == 0) {\n    minutos.textContent = 25;\n    segundos.textContent = 59;\n    descansoSeg.textContent = 59;\n    descansoMin.textContent = 5;\n    ciclos.textContent++;\n    showPomodoro();\n  }\n}\n\n//# sourceURL=webpack://npm/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;