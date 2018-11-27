window.cipher = {
	encode: function(offset, string){
		let cadena = "";
		for(let i = 0; i < string.length; i++){
			let positionAsc = string.charCodeAt(i);
			let fCifrar = (positionAsc - 65 + offset) % 26 + 65;
			let palCifrada = String.fromCharCode(fCifrar);
			cadena = cadena + palCifrada;	
			
		}
	return cadena;	
	},
	decode: function(offset, string){
		let cadena = "";
		for (let i = 0; i < string.length; i++){
			let positionAsc = string.charCodeAt(i);
			let fDescifrar=(positionAsc - 65 - offset) % 26 + 65;
			let palDescifrada = String.fromCharCode(fDescifrar);
			cadena = cadena + palDescifrada;
		}
	return cadena;
	}
};