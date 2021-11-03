module.exports = class Constructs {
	/*
		everything is derived from funC,
		this allows any construct to be converted into funC,
		claS, apI, systeM, etc.
	*/
	list = [
		"alG",				// root function
		"speC",
		// "blocK",
		// "validatE",
		"funC",				// functional function
		"claS",				// OOP function
		"apI",				// url-localhost accesible function 
		// "service",			// url-nonlocalhost accessible function
		"system"			// vm-container wrapped function			
	];

	roles = [
		"server",
		"client",
		"proxy",
		"middleman",
	];

	interface = [
		"io",		// computers plugged into each wired/less
		"logic",	// source code revealed
		"visual",	// 
		"visual - logger",
		"visual - shell",
		"visual - browser",
		"visual - widget",
		"visual - smmartphone",
		"visual - watch",

		"audio",
		"audio - microphone",
		"audio - speaker",

		"physical",
		"neurolink",
	];

	constructor(){
		this.list.forEach((construct)=>{
			try {
				this[construct] = require("./"+construct+".js");
			} catch(){
				console.error("error construct not loaded", construct);
			} finally {
				// intentionally left empty
			}
		});
	}
}