/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

const ejercicio12 = (str1, str2) => {
	let auxStr1 = str1.split(' ');
	let auxStr2 = str2.split(' ');

	let cadena1 = '';
	let cadena2 = '';

	// for (let i1 = 0; i1 < auxStr1.length; i1++) {
	// 	for (let i2 = 0; i2 < auxStr2.length; i2++) {
	// 		if (auxStr1[i1] !== auxStr2[i2]) {
	// 			// cadena1 += auxStr1[i2] + ' ';
	// 			break;
	// 		}
	// 	}

	// }
	// for (let i1 = 0; i1 < auxStr1.length; i1++) {
	// 	for (let i2 = 0; i2 < auxStr1.length; i2++) {
	// 		if (auxStr2[i1] !== auxStr1[i2]) {
	// 			// cadena2 += auxStr2[i2] + ' ';
	// 			break;
	// 		}
	// 	}

	// }

	for (let index = 0; index < auxStr1.length; index++) {
		let index1 = auxStr2.findIndex((palabra) => palabra === auxStr1[index]);
		if (!(index1 !== -1)) {
			cadena1 += auxStr1[index] + ' ';
		}
	}

	for (let index = 0; index < auxStr2.length; index++) {
		let index1 = auxStr1.findIndex((palabra) => palabra === auxStr2[index]);
		if (!(index1 !== -1)) {
			cadena2 += auxStr2[index] + ' ';
		}
	}

	console.log(`Cadena 1: ${cadena1}\nCadena 2: ${cadena2}`);
};

ejercicio12('hola como estas', 'hola soy Jefferson');

/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

const ejercicio13 = (num) => {
	let numDig = num.length;
	let suma = 0;

	for (let index = 0; index < num.length; index++) {
		suma += Math.pow(Number.parseInt(num.charAt(index)), numDig);
		console.log(suma);
	}
	suma === Number.parseInt(num)
		? console.log('Es un numero armstrong')
		: console.log('No es un numero armstrong');
};

ejercicio13('153');
