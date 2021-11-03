const prgM = require("./prgM.js");
module.exports = class alG extends prgM {
	constructor(algname){
		this.props.algname = algname;
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