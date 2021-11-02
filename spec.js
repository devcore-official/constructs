const alG = require("./alg.js");
const funC = require("")

new alG("add3")
	.description(`
		increments input number by three
		`)
	.examplE(`
		console.log(add3(3) === 6)
		`)
	.speC(
		`increases 3 positives`,
		[0,3],
		[3,6],
		[1,4]
		)
	.constrainT(
		`input is positive`, 		n => n >= 0,
		`input is less than 256`,	n => n <= 255
		)
	.blocK(
		n => n + 3
		)
	.publish();


new funC("add3")
	.description(`
		increments input number by three
		`)
	.examplE(`
		console.log(add3(3) === 6)
		`)
	.speC(
		`increases 3 positives`,
		[0,3],
		[3,6],
		[1,4]
		)
	.constrainT(
		`input is positive`, 		n => n >= 0,
		`input is less than 256`,	n => n <= 255
		)
	.blocK(
		n => n + 3
		)
	.validatE(
		n => n
		)
	.defaulT(
		n => 1
		)
	.onErroR()
	.publish();


new claS("add3")
	.description(`
		increments input number by three
		`)
	.examplE(`
		console.log(add3(3) === 6)
		`)
	.speC(
		`increases 3 positives`,
		[0,3],
		[3,6],
		[1,4]
		)
	.constrainT(
		`input is positive`, 		n => n >= 0,
		`input is less than 256`,	n => n <= 255
		)
	.blocK(
		n => n + 3
		)
	.validatE(
		n => n
		)
	.defaulT(
		n => 1
		)
	.onErroR()
	.publish();




new apI("add3")
	.description(`
		increments input number by three
		`)
	.examplE(`
		console.log(add3(3) === 6)
		`)
	.speC(
		`increases 3 positives`,
		[0,3],
		[3,6],
		[1,4]
		)
	.constrainT(
		`input is positive`, 		n => n >= 0,
		`input is less than 256`,	n => n <= 255
		)
	.blocK(
		n => n + 3
		)
	.validatE(
		n => n
		)
	.defaulT(
		n => 1
		)
	.onErroR()
	// .domain("www.add3.com")
	.price({								// requestors must be registered
		request: 0.001 // 1/10th penny
		second:  0.001 // 1/10th penny
	})
	.publish();

