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

		alG("add3")
			.description(`increments input 3 values up`)
			.examplE(`

				const alg		= add3;
				const input 	= 20;
				const output 	= func(input);
				const expect 	= 23;

				console.log(output === expect)

			`).
			.speC("adds 3 to input", 
				[0,3],
				[3,6],
				[11,14]
			)
			.constrainT( // can be considered queries
				"input is positive",	n => n > 0,
				"input is gt 100",		n => n > 100,
				"input is lt 1000",		n => n < 1000
			)
			.blocK(
				n => n + 3
			)
			.publish();


		API("add3") // API references a list to all algorithms which faces the algorithm to the internet
			// params: 		used as url query params
			// sensitive:   params placed in request body for middleman privacy
			// memory:      selectable memory can be redirected to database
			// 	the memory can even be adaptable
			.logger(false)	// optionally log interactions
			.deploy();		// deploys API to your servers

		scripT(`

				/*
					makes two seperate api calls
				*/

				const a = add3(2);

				const b = add3(5);


				/*
					logs once api requests complete
				*/
				console.log(a);
				console.log(b);

			`);

	}
}




class alG {

	props = {
		description: [],
		examplE:     [],
		speC:        [],
		constrainT:  [],
		blocK:       []
	};

	errors = [];

	constructor(algname){
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
	}
	publish(){
		// confirms with registry the algorithm is unique
		// checks all props not empty
		// ensures no errors, and haults if any errors
		this.props.speC.slice(1).forEach((IO_assertion)=>{
			const input = IO_assertion[0];
			const output = IO_assertion[1];
			if (output !== this.props.blocK(input)) this.errors.push(`IO_assertion failed: ${IO_assertion}`);
		});
		if (this.errors.length > 0) {
			throw new Error(...errors)
		}
		// publish is the last executable chain so it doesn't return this variable
	}
	description(descr){
		(typeof descr === "string") || this.errors.push("prop description not string");
		(descr.length > 0)			|| this.errors.push("prop description empty");
		(descr.length < 500)		|| this.errors.push("prop description exceeds 500 char limit");
		this.props.description.push(descr);
		return this;
	}
	examplE(example){
		(typeof example === "string") || this.errors.push("prop example not string");
		(descr.length > 0)			|| this.errors.push("prop example empty");
		(descr.length < 500)		|| this.errors.push("prop example exceeds 500 char limit");
		this.props.examplE.push(descr);
		return this;	
	}
	speC(spec /*, assertions*/){
		(typeof spec === "string")  || this.errors.push("prop spec not string");
		(spec.length > 0)			|| this.errors.push("prop spec empty");
		(spec.length < 500)		    || this.errors.push("prop spec exceeds 500 char limit");
		const assertions = Object.values(arguments).slice(1);
		// each specification needs minimum of 3 assertions
		(assertions.length > 2) || this.errors.push("prop spec requires 3 assertions")
		this.props.spec.push([spec, ...assertions])
		return this;
	}
	constrainT(){

		(Object.values(arguments).length !== 0) 	  || this.errors.push("prop constrainT must not be empty");
		(Object.values(arguments).length % 2 === 0)   || this.errors.push("prop constrainT must contain even # of inputs");
		
		for (let i = 0; i < Object.values(arguments).length; i++) {
			if (/*even*/		i % 2 === 0) { 
				let constraint_description = Object.values(arguments)[i];
				typeof constraint_description === "string"      || this.errors.push("prop constraint description not string");
				(constraint_description.length > 0)			    || this.errors.push("prop constraint description empty");
				(constraint_description.length < 500)		    || this.errors.push("prop constraint description exceeds 500 char limit");
			}
			else if (/*odd*/	i % 2 === 1) {
				let constraint_block = Object.values(arguments)[i];
				typeof constraint_block === "function"			|| this.errors.push("prop constraint_block not function");

			}
			this.props.constrainT[i] = Object.values(arguments)[i];
		}
		return this;
	}
	blocK(cb){
		typeof cb === "function" || this.errors.push("prop block must be a callback");
		this.props.blocK = cb;
		return this;
	}


}