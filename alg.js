module.exports = class alG {

	props = {
		algname		:"",
		description: [],
		examplE:     [],
		speC:        [],
		constrainT:  [],
		blocK:       []
	};

	errors = [];

	constructor(algname){
		this.props.algname = algname;
	}
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
	speC(spec /*, assertions*/){
		(typeof spec === "string")  || this.errors.push("prop spec not string");
		(spec.length > 0)			|| this.errors.push("prop spec empty");
		(spec.length < 500)		    || this.errors.push("prop spec exceeds 500 char limit");
		const assertions = Object.values(arguments).slice(1);
		// each specification needs minimum of 3 assertions
		(assertions.length > 2) || this.errors.push("prop spec requires 3 assertions")
		this.props.speC.push([spec, ...assertions])
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
};