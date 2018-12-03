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

//Botón 'Start' del formulario 'scrWelcome'
btnStart.addEventListener("click", () => {
  scrCipher.classList.add("show");
  scrCipher.classList.remove("unseen");
  scrWelcome.classList.add("unseen");
  scrWelcome.classList.remove("show");
});

//Botón 'Oculta el mensaje' del formulario 'scrCipher'
btnEncode.addEventListener("click", () => {
	const offset = parseInt(document.getElementById("num-offset").value);
	const string = document.getElementById("msg-encryp").value.toUpperCase();
	if (offset ==""){
		alert('Ingresa un número de clave');
	} else {
			if (offset < 0){
			alert('Ingresar un número positivo');
		} else if (offset == 0) {
			alert('Si ingresas como código el número 0, el texto no podrá ser cifrado');
		} else {
			if (string =="") {
				alert('Ingresa un mensaje.');
			} else {
				const cipherEnc = cipher.encode (offset, string);
				msgAnswer.innerHTML = cipherEnc;
				scrCipher.classList.add("unseen");
				scrCipher.classList.remove("show");
				scrGoodBye.classList.add("show");
				scrGoodBye.classList.remove("unseen");
			}
		}
	}
});

//Botón 'Descifra el mensaje' del formulario 'scrCipher'
btnDecode.addEventListener("click", () => {
	const offset = parseInt(document.getElementById("num-offset").value);
	const string = document.getElementById("msg-encryp").value.toUpperCase();
	if (offset ==""){
		alert('Ingresa un número de clave');
	} else {
			if (offset < 0){
			alert('Ingresar un número positivo');
		} else if (offset == 0) {
			alert('Si ingresas como código el número 0, el texto no podrá ser cifrado');
		} else {
			if (string =="") {
				alert('Ingresa un mensaje.');
			} else {
				const cipherDec = cipher.decode (offset, string);
				msgAnswer.innerHTML = cipherDec;
				scrCipher.classList.add("unseen");
				scrCipher.classList.remove("show");
				scrGoodBye.classList.add("show");
				scrGoodBye.classList.remove("unseen");
			}
		}
	}
});

//Botón 'Volver a escribir un mensaje' del formulario 'scrGoodBye'
btnReturn.addEventListener("click", () => {
  scrCipher.classList.remove("unseen");
  scrCipher.classList.add("show");
  scrGoodBye.classList.remove("show");
  scrGoodBye.classList.add("unseen");
  document.getElementById("num-offset").value="";
  document.getElementById("msg-encryp").value="";
});