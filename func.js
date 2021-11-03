const alG = require("./alg.js");
module.exports = class funC extends alG {
	constructor(){
		super(this);

		this.props.defaulT 	= [];
		this.props.validatE = [];
		this.props.try 		= [];
		this.props.onErroR 	= [];
		this.props._ 		= [];
	}
	defaulT(defaults){
		defaults.forEach(cb=>{
			this.mem[cb.name] = cb();
		});
	}
	validatE(){
		validate.forEach(cb=>{
			this.mem[cb.name] = cb();
		})
	}
	onErroR(cb){
		this.props.onErroR = cb;
	}			
	trY(){				// only executed during runtime
		try {
			this.props._();
		}	
		catch(){
			this.props.onErroR();
		}
		finally(){
			// left blank intentionally
		}
	}
	_(){				// only executed during runtime

		["paraM","defaulT","validatE","blocK"]
			.every(
				method=>this.props[method]()
				)
		
		// this.props.paraM()
		// this.props.validatE();
		// this.props.defaulT();
		// this.props.blocK();

	}
	$(language){
		 // switch (language) {
		 // 	case "js"
		 // }
	}
}