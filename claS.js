const funC = require("./func.js");
module.exports = class claS extends funC {
	visibility = ["public","private","protect","static","internal","middleman"];
	/*
		all non methods memory can be wrapped by DStruct_intuit
	*/
	constructor(){
		super(this);
	}
	inherit(inherit){
		this.props.props = inherit;
	}
	extend(){

	}
	init(){
		
	}
	GOF4(){
	}
	method(){
	}
	get() {
	}
	set() {
	}
}