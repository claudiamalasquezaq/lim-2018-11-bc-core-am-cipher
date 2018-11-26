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

const cipherEncode = (msgEncryp,numOffset) => {
  	let cadena = "";
		for(let i = 0; i < msgEncryp.length; i++){
	    let pAsc = msgEncryp.charCodeAt(i);
	    if (pAsc === 32){
	      cadena = cadena + " ";
	    } else {
			  let fCifrar = (pAsc - 65 + parseInt(numOffset)) % 26 + 65;
			  let palCifrada = String.fromCharCode(fCifrar);
			  cadena = cadena + palCifrada;
			}	
		}
	msgAnswer.innerHTML = cadena;
}

const cipherDecode = (msgEncryp, numOffset) => {
	let cadena = "";
	for (let i = 0; i < msgEncryp.length; i++){
		let pAsc = msgEncryp.charCodeAt(i);
		if (pAsc === 32){
			cadena = cadena + " ";
		} else {
			let fCifrar=(pAsc - 65 - parseInt(numOffset)) % 26 + 65;
			if (fCifrar < 65){
				let menorA = fCifrar + 26;
				let palCifrada = String.fromCharCode(menorA);
				cadena = cadena + palCifrada;
			} else {
				let palCifrada = String.fromCharCode(fCifrar);
				cadena = cadena + palCifrada;
			}
		}
	}
	msgAnswer.innerHTML = cadena;
}


btnStart.addEventListener("click", () => {
  scrCipher.classList.add("show");
  scrCipher.classList.remove("unseen");
  scrWelcome.classList.add("unseen");
  scrWelcome.classList.remove("show");
  document.getElementById("num-offset").value="";
  document.getElementById("msg-encryp").value="";
});

btnEncode.addEventListener("click", () => {
	const numOffset = document.getElementById("num-offset").value;
	const msgEncryp = document.getElementById("msg-encryp").value.toUpperCase();
	if (numOffset ==""){
		alert('Ingresa un número de clave');
	} else {
			if (numOffset < 0){
			alert('Ingresar un número positivo');
		} else if (numOffset == 0) {
			alert('Si ingresas como código el número 0, el texto no podrá ser cifrado');
		} else {
			if (msgEncryp =="") {
				alert('Ingresa un mensaje.');
			} else {
				cipherEncode (msgEncryp,numOffset);
				scrCipher.classList.add("unseen");
				scrCipher.classList.remove("show");
				scrGoodBye.classList.add("show");
				scrGoodBye.classList.remove("unseen");
			}
		}
	}
});

btnDecode.addEventListener("click", () => {
	const numOffset = document.getElementById("num-offset").value;
	const msgEncryp = document.getElementById("msg-encryp").value.toUpperCase();
	if (numOffset ==""){
		alert('Ingresa un número de clave');
	} else {
			if (numOffset < 0){
			alert('Ingresar un número positivo');
		} else if (numOffset == 0) {
			alert('Si ingresas como código el número 0, el texto no podrá ser cifrado');
		} else {
			if (msgEncryp =="") {
				alert('Ingresa un mensaje.');
			} else {
				cipherDecode(msgEncryp, numOffset);
				scrCipher.classList.add("unseen");
				scrCipher.classList.remove("show");
				scrGoodBye.classList.add("show");
				scrGoodBye.classList.remove("unseen");
			}
		}
	}
});


btnReturn.addEventListener("click", () => {
  scrWelcome.classList.remove("unseen");
  scrWelcome.classList.add("show");
  scrGoodBye.classList.remove("show");
  scrGoodBye.classList.add("unseen");
});