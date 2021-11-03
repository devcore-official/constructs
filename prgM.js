module.exports = class Prgm {
	props = {
		algname		:"",
		description: [],
		examplE:     [],
		speC:        [],
		constrainT:  [],
		blocK:       [],
		validatE:    [],
		defaulT:     [],
		onErroR:     [],
		price: 		 [],
	};
	errors = [];

	constructor(){
		/*
			this object converts source code into target
			language executable.
		*/
	}
	language(){}
	run(){}
	compile(){}
	install(){}
	update(){}
	profile(){}




	publish(){
		// confirms with registry the algorithm is unique
		// checks all props not empty
		// ensures no errors, and haults if any errors

		// console.log(this.props.speC[0][0])
		this.props.speC.forEach((element,index)=>{
			this.props.speC[index].slice(1).forEach((IO_assertion)=>{
				const input = IO_assertion[0];
				const output = IO_assertion[1];
				if (output !== this.props.blocK(input)) this.errors.push(`IO_assertion failed: ${IO_assertion}`);
			});
		});
		if (this.errors.length > 0) {
			throw new Error(...this.errors)
		}
		// publish is the last executable chain so it doesn't return this variable

		// needs to check alg existence in database
		console.log("published ", this.algname);
		return this.props.blocK; 
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
		(example.length > 0)			|| this.errors.push("prop example empty");
		(example.length < 500)		|| this.errors.push("prop example exceeds 500 char limit");
		this.props.examplE.push(example);
		return this;	
	}


}