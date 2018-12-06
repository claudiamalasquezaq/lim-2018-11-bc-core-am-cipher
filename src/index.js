//Formularios
const scrWelcome = document.getElementById("scr-welcome");
const scrCipher = document.getElementById("scr-cipher");
const scrGoodBye = document.getElementById("scr-goodBye");
//Botones
const btnStart = document.getElementById("btn-start");
const btnEncode = document.getElementById("btn-encode");
const btnDecode = document.getElementById("btn-decode");
const btnReturn = document.getElementById("btn-return");
//Cajas de texto
const offset = document.getElementById("num-offset").value;
const string = document.getElementById("msg-encryp").value;
const msgAnswer = document.getElementById("msg-answer");
//Aparecer mensaje de advertencia
const warningOffset = document.getElementById("warning-offset");
const warningString = document.getElementById("warning-string");


//Función para cambiar el display none por block
const show = (nameForm) => {
	nameForm.classList.add("show");
	nameForm.classList.remove("unseen");
}

//Función para cambiar el display block por none
const hide = (nameForm) => {
	nameForm.classList.add("unseen");
	nameForm.classList.remove("show");
}

//Función para validar que todos los campos estén llenos
const validate = (offset, string) => {
	// const offset = parseInt(document.getElementById("num-offset").value);
	// const string = document.getElementById("msg-encryp").value.toUpperCase();
	console.log(offset)
	if (offset.length !== 0 || string.trim() === "") {
			alert("Ingresa tu código y texto a cifrar");
			return false;
		} else if (offset <= 0) {
			alert ("Ingresa un número mayor a 0");
			return false;
		} else {
			return true;
		}
}

//Botón 'Start' del formulario 'scrWelcome'
btnStart.addEventListener("click", () => {
	show(scrCipher);
	hide(scrWelcome);
});

//Botón 'Oculta el mensaje' del formulario 'scrCipher'
btnEncode.addEventListener("click", () => {
	const offset = parseInt(document.getElementById("num-offset").value);
	const string = document.getElementById("msg-encryp").value.toUpperCase();
	if (validate (offset, string)){
		const cipherEnc = cipher.encode (offset, string);
		msgAnswer.innerHTML = cipherEnc;
		show(scrGoodBye);
		hide(scrCipher);
	}
});

//Botón 'Descifra el mensaje' del formulario 'scrCipher'
btnDecode.addEventListener("click", () => {
	const offset = parseInt(document.getElementById("num-offset").value);
	const string = document.getElementById("msg-encryp").value.toUpperCase();
	if (validate (offset, string)){
		const cipherDec = cipher.decode (offset, string);
		msgAnswer.innerHTML = cipherDec;
		show(scrGoodBye);
		hide(scrCipher);
	}
});

//Botón 'Volver a escribir un mensaje' del formulario 'scrGoodBye'
btnReturn.addEventListener("click", () => {
	show(scrCipher);
	hide(scrGoodBye);
  document.getElementById("num-offset").value="";
  document.getElementById("msg-encryp").value="";
});