// const api = require("./EverythingAPI/api/index.js")
const claS = require("./claS.js");
module.exports = class apI extends claS {

	constructor(){
		super(this);




	}
	deploy(){

		// deploy where?


		return this;
	}
	price(obj){
		// dollars per second
		// dollars per request
		typeof obj.request === "number" || this.errors.push("prop request is not number");
		typeof obj.second  === "number" || this.errors.push("prop second is not number");

		this.props.price.second = obj.second;
		this.props.price.request =  obj.request

		return this;
	}

}