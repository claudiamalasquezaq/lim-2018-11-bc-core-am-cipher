//Formularios
const scrWelcome = document.getElementById("scr-Welcome");
const scrCipher = document.getElementById("scr-Cipher");
const scrGoodBye = document.getElementById("scr-GoodBye");
//Botones
const btnStart = document.getElementById("btn-start");
const btnEncode = document.getElementById("btn-encode");
const btnDecode = document.getElementById("btn-decode");
const btnReturn = document.getElementById("btn-return");
//Cajas de texto
const numOffset = document.getElementById("num-offset");
const msgEncryp = document.getElementById("msg-encryp");
const msgAnswer = document.getElementById("msg-answer");


function apSgtePantalla() {
  scrCipher.classList.add("aparece");
  scrCipher.classList.remove("oculto");
  scrWelcome.classList.add("oculto");
  scrWelcome.classList.remove("aparece");
}

function returnHome() {
  scrWelcome.classList.remove("oculto");
  scrWelcome.classList.add("aparece");
  scrGoodBye.classList.remove("aparece");
  scrGoodBye.classList.add("oculto");
}

btnStart.addEventListener("click", apSgtePantalla);
btnReturn.addEventListener("click", returnHome);