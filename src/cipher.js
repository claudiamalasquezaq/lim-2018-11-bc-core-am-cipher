window.cipher = {
	encode: function(offset, string){
		let chain = "";
		for(let i = 0; i < string.length; i++){
			let positionAsc = string.charCodeAt(i);
			if (positionAsc === 32){
				chain = chain + " ";
			} else {
				let pEncode = (positionAsc - 65 + offset) % 26 + 65;
				let lettEncode = String.fromCharCode(pEncode);
				chain = chain + lettEncode;	
			}
		}
	return chain;	
	},
	decode: function(offset, string){
		let chain = "";
		for (let i = 0; i < string.length; i++){
			let positionAsc = string.charCodeAt(i);
			if (positionAsc === 32) {
				chain = chain + " ";
			} else {
				let fDecode = (positionAsc - 65 - offset) % 26 + 65;
				if (pDecode < 65){
					pDecode = pDecode + 26;
				} 
				let lettDecode = String.fromCharCode(pDecode);
				chain = chain + lettDecode;
			}
		}
	return chain;
	}
};