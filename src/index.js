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

function cipherEncode(msgEncryp,numOffset){
  	let cadena = "";
	for(let i = 0; i < msgEncryp.length; i++){
	    let pAsc = msgEncryp.charCodeAt(i);
	    if (pAsc === 32){
	      cadena = cadena + " ";
	      console.log(cadena);
	    } else {
		  let fCifrar = (pAsc - 65 + parseInt(numOffset)) % 26 + 65;
		  let palCifrada = String.fromCharCode(fCifrar);
		  cadena = cadena + palCifrada;
		  console.log(cadena);
		//}
	}
	msgAnswer.innerHTML = cadena;	
}
}

function sendDecrypted() {

	if (numOffset.value <= 0){
		alert('Ingresar un número positivo');
	} else if (numOffset.value === 0) {
		alert('Si ingresas como código el número 0, el texto no podrá ser cifrado');
	} else {
		cipherEncode();
	}
}



btnStart.addEventListener("click", apSgtePantalla);
btnReturn.addEventListener("click", returnHome);
btnEncode.addEventListener("click", () => {
	const numOffset = document.getElementById("num-offset").value;
	const msgEncryp = document.getElementById("msg-encryp").value;

	cipherEncode(msgEncryp, numOffset);
});