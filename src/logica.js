/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const ejercicio1 = () => {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 !== 0) {
			console.log('fizz');
		} else if (i % 5 === 0 && i % 3 !== 0) {
			console.log('buzz');
		} else if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else {
			console.log(i);
		}
	}
};
// ejercicio1();

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const ejercicio2 = (valor1, valor2) => {
	if (valor1 === valor2 || valor1.length !== valor2.length) return false;

	if (valor1.length === valor2.length) {
		let arrayValor2 = Array.from(valor2);

		// vamos a recorrer cada letra de la primera palabra
		for (let i = 0; i < valor1.length; i++) {
			let letter = valor1.charAt(i);
			arrayValor2[arrayValor2.indexOf(letter)] = null;
			// console.log(letter);
			// console.log(arrayValor2);
		}

		return arrayValor2.every((value) => value === null);
	}
};
// console.log(ejercicio2('casos', 'sasca'));
// console.log(ejercicio2('Los angeles', 'anglese Los'));

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const ejercicio3 = () => {
	let valor1 = 0,
		valor2 = 1,
		acumulado = 0;

	for (let index = 0; index < 8; index++) {
		console.log(valor1);
		acumulado = valor2 + valor1;
		valor2 = valor1;
		valor1 = acumulado;
	}

	/**
	 * V1 V2 AC
	 * 0  1   0
	 * 1  0   1
	 * 1  1   1
	 * 2  1   2
	 * 3  2   3
	 * 5  3   5
	 * 8  5   8
	 */
};
// ejercicio3();

const fibonacci = (n) => {
	let sequence = [0, 1];

	for (let i = 2; i < n; i++) {
		sequence[i] = sequence[i - 1] + sequence[i - 2];
	}

	return sequence;
};
// console.log(fibonacci(50));

/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const ejercicio4 = () => {
	for (let contador = 0; contador <= 100; contador++) {
		if (contador % contador === 0 && contador !== 1) {
			console.log(contador);
		}
	}
};
// ejercicio4();

/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const ejercicio5 = (poligono) => {
	console.log(poligono.name);
	switch (poligono.name) {
		case 'triangulo':
			return (poligono.base * poligono.altura) / 2;
		case 'cuadrado':
			return poligono.lado * poligono.lado;
		case 'rectangulo':
			return poligono.base * poligono.altura;
		default:
			return 0;
	}
};

let triangulo = {
	name: 'triangulo',
	base: 23,
	altura: 26,
};
let cuadrado = {
	name: 'cuadrado',
	lado: 10,
};
let rectangulo = {
	name: 'rectangulo',
	base: 15,
	altura: 7,
};

// console.log(ejercicio5(rectangulo));

/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const ejercicio7 = (cadena) => {
	let cadenaInvertida = '';
	for (let index = cadena.length; 0 <= index; index--) {
		cadenaInvertida += cadena.charAt(index);
	}
	console.log(cadenaInvertida);
};

// ejercicio7('Hola mundo');

/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const ejercicio8 = (text) => {
	let nuevoTexto = text.split(' ');

	let conteoPalabra = [];
	console.log(nuevoTexto);

	for (let i = 0; i < nuevoTexto.length; i++) {
		let index = conteoPalabra.findIndex((item) => item.palabra === nuevoTexto[i]);

		if (index === -1) {
			conteoPalabra.push({
				palabra: nuevoTexto[i],
				repeticion: 1,
			});
		} else {
			conteoPalabra[index].repeticion++;
		}
	}
	console.log(conteoPalabra);
};

// ejercicio8('hola como estas, como estas hola hola');

/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const ejercicio9 = (number) => {
	let binaryNumberAux = '';
	let binaryNumber = '';

	while (number > 1) {
		if (number % 2 === 0) {
			number = number / 2;
			binaryNumberAux += '0';
		} else {
			number = Number.parseInt(number / 2);
			binaryNumberAux += '1';
		}
		if (number === 1) binaryNumberAux += '1';
	}

	for (let index = binaryNumberAux.length; index !== -1; index--) {
		binaryNumber += binaryNumberAux.charAt(index);
		if (index % 4 === 0) binaryNumber += ' ';
	}

	console.log("'" + binaryNumber + "'");
};
// ejercicio9(26398);

/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

const ejercicio10 = (text) => {
	let textReturned = '';

	if (text.search('[a-z]|[0-9]') !== -1) {
		// TEXTO A MORSE
		for (let index = 0; index < text.length; index++) {
			switch (text.charAt(index).toUpperCase()) {
				case ' ':
					textReturned += '  ';
					break;
				case 'A':
					textReturned += '.- ';
					break;
				case 'B':
					textReturned += '-... ';
					break;
				case 'C':
					textReturned += '-.-. ';
					break;
				case 'D':
					textReturned += '-.. ';
					break;
				case 'E':
					textReturned += '. ';
					break;
				case 'F':
					textReturned += '..-. ';
					break;
				case 'G':
					textReturned += '--. ';
					break;
				case 'H':
					textReturned += '.... ';
					break;
				case 'I':
					textReturned += '.. ';
					break;
				case 'J':
					textReturned += '.--- ';
					break;
				case 'K':
					textReturned += '-.- ';
					break;
				case 'L':
					textReturned += '.-.. ';
					break;
				case 'M':
					textReturned += '-- ';
					break;
				case 'N':
					textReturned += '-. ';
					break;
				case 'O':
					textReturned += '--- ';
					break;
				case 'P':
					textReturned += '.--. ';
					break;
				case 'Q':
					textReturned += '--.- ';
					break;
				case 'R':
					textReturned += '.-. ';
					break;
				case 'S':
					textReturned += '... ';
					break;
				case 'T':
					textReturned += '- ';
					break;
				case 'U':
					textReturned += '..- ';
					break;
				case 'V':
					textReturned += '...- ';
					break;
				case 'W':
					textReturned += '.-- ';
					break;
				case 'X':
					textReturned += '-..- ';
					break;
				case 'Y':
					textReturned += '-.-- ';
					break;
				case 'Z':
					textReturned += '--.. ';
					break;
				case '0':
					textReturned += '----- ';
					break;
				case '1':
					textReturned += '.---- ';
					break;
				case '2':
					textReturned += '..--- ';
					break;
				case '3':
					textReturned += '...-- ';
					break;
				case '4':
					textReturned += '....- ';
					break;
				case '5':
					textReturned += '..... ';
					break;
				case '6':
					textReturned += '-.... ';
					break;
				case '7':
					textReturned += '--... ';
					break;
				case '8':
					textReturned += '---.. ';
					break;
				case '9':
					textReturned += '----. ';
					break;
				default:
					textReturned += texto.charAt(index) + ' ';
					break;
			}
		}
	} else {
		let textMorse = text.split('  ');
		let index = 0;
		while (textMorse[index] !== undefined) {
			let textMorseAux = textMorse[index].split(' ');

			for (let i = 0; i < textMorseAux.length; i++) {
				switch (textMorseAux[i]) {
					case '':
						textReturned += ' ';
						break;
					case '.-':
						textReturned += 'A';
						break;
					case '-...':
						textReturned += 'B';
						break;
					case '-.-.':
						textReturned += 'C';
						break;
					case '-..':
						textReturned += 'D';
						break;
					case '.':
						textReturned += 'E';
						break;
					case '..-.':
						textReturned += 'F';
						break;
					case '--.':
						textReturned += 'G';
						break;
					case '....':
						textReturned += 'H';
						break;
					case '..':
						textReturned += 'I';
						break;
					case '.---':
						textReturned += 'J';
						break;
					case '-.-':
						textReturned += 'K';
						break;
					case '.-..':
						textReturned += 'L';
						break;
					case '--':
						textReturned += 'M';
						break;
					case '-.':
						textReturned += 'N';
						break;
					case '---':
						textReturned += 'O';
						break;
					case '.--.':
						textReturned += 'P';
						break;
					case '--.-':
						textReturned += 'Q';
						break;
					case '.-.':
						textReturned += 'R';
						break;
					case '...':
						textReturned += 'S';
						break;
					case '-':
						textReturned += 'T';
						break;
					case '..-':
						textReturned += 'U';
						break;
					case '...-':
						textReturned += 'V';
						break;
					case '.--':
						textReturned += 'W';
						break;
					case '-..-':
						textReturned += 'X';
						break;
					case '-.--':
						textReturned += 'Y';
						break;
					case '--..':
						textReturned += 'Z';
						break;
					case '-----':
						textReturned += '0';
						break;
					case '.----':
						textReturned += '1';
						break;
					case '..---':
						textReturned += '2';
						break;
					case '...--':
						textReturned += '3';
						break;
					case '....-':
						textReturned += '4';
						break;
					case '.....':
						textReturned += '5';
						break;
					case '-....':
						textReturned += '6';
						break;
					case '--...':
						textReturned += '7';
						break;
					case '---..':
						textReturned += '8';
						break;
					case '----.':
						textReturned += '9';
						break;
					default:
						textReturned += textMorseAux[i];
						break;
				}
			}
			index++;
		}
	}

	console.log(textReturned);
};
// ejercicio10('hola soy Jefferson 27');
// ejercicio10(
// 	'.... --- .-.. .-   ... --- -.--   .--- . ..-. ..-. . .-. ... --- -.   ..--- --...'
// );
// ejercicio10('..--- --...');

/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

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

// ejercicio12('hola como estas', 'hola soy Jefferson');

/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

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

// ejercicio13('153');
