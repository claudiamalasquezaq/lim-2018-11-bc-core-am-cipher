window.cipher = {
	encode: function(offset, string){
		let cadena = "";
		for(let i = 0; i < string.length; i++){
			let positionAsc = string.charCodeAt(i);
			let fEncode = (positionAsc - 65 + offset) % 26 + 65;
			let lettEncode = String.fromCharCode(fEncode);
			cadena = cadena + lettEncode;	
			
		}
	return cadena;	
	},
	decode: function(offset, string){
		let cadena = "";
		for (let i = 0; i < string.length; i++){
			let positionAsc = string.charCodeAt(i);
			let fDecode = (positionAsc - 65 - offset) % 26 + 65;
			if (fDecode < 65){
				fDecode = fDecode + 26;
			} 
			let lettDecode = String.fromCharCode(fDecode);
			cadena = cadena + lettDecode;
		}
	return cadena;
	}
};