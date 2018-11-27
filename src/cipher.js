window.cipher = {
	encode: function(offset, string){
		let cadena = "";
		for(let i = 0; i < string.length; i++){
			let positionAsc = string.charCodeAt(i);
			if (positionAsc === 32){
				cadena = cadena + " ";
			} else {
				let fCifrar = (positionAsc - 65 + parseInt(offset)) % 26 + 65;
				let palCifrada = String.fromCharCode(fCifrar);
				cadena = cadena + palCifrada;	
			}
		}
	return cadena;	
	},

	decode: function(offset, string){
		let cadena = "";
		for (let i = 0; i < string.length; i++){
			let positionAsc = string.charCodeAt(i);
			if (positionAsc === 32){
				cadena = cadena + " ";
			} else {
				let fDescifrar=(positionAsc - 65 - parseInt(offset)) % 26 + 65;
				if (fDescifrar < 65){
					let menorA = fDescifrar + 26;
					let palDescifrada = String.fromCharCode(menorA);
					cadena = cadena + palDescifrada;
				} else {
					let palDescifrada = String.fromCharCode(fDescifrar);
					cadena = cadena + palDescifrada;
			}
		}
	}
	return cadena;
	}
};
