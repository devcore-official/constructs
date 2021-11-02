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

	constructor(){

		/*
			recommend algorithm creation in this order
			example, speC, constrainT, blocK

			constraints open fllexibility.

			a 
		*/

		// alG("add3")
		// 	.description(`increments input 3 values up`)
		// 	.examplE(`

		// 		const alg		= add3;
		// 		const input 	= 20;
		// 		const output 	= func(input);
		// 		const expect 	= 23;

		// 		console.log(output === expect)

		// 	`).
		// 	.speC("adds 3 to input", 
		// 		[0,3],
		// 		[3,6],
		// 		[11,14]
		// 	)
		// 	.constrainT( // can be considered queries
		// 		"input is positive",	n => n > 0,
		// 		"input is gt 100",		n => n > 100,
		// 		"input is lt 1000",		n => n < 1000
		// 	)
		// 	.blocK(
		// 		n => n + 3
		// 	)
		// 	.publish();


		// API("add3") // API references a list to all algorithms which faces the algorithm to the internet
		// 	// params: 		used as url query params
		// 	// sensitive:   params placed in request body for middleman privacy
		// 	// memory:      selectable memory can be redirected to database
		// 	// 	the memory can even be adaptable
		// 	.logger(false)	// optionally log interactions
		// 	.deploy();		// deploys API to your servers

		// scripT(`

		// 		/*
		// 			makes two seperate api calls
		// 		*/

		// 		const a = add3(2);

		// 		const b = add3(5);


		// 		/*
		// 			logs once api requests complete
		// 		*/
		// 		console.log(a);
		// 		console.log(b);

		// 	`);

	}
}