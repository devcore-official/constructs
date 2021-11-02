const alg = require("./alg.js");

new alg("add3")
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


// console.log(add3);	