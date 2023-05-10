'use strict'; 
/* 
//Método normal, solo toma los numeros y los suma.

function aVeryBigSum(ar) { 
	let sum = 0;
	for (let i = 0; i < ar.length; i++){
		console.log(ar[i]);
		sum += ar[i];
	}
	return sum;
	
} 

let arrBig = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]; 

console.log(aVeryBigSum(arrBig)); 
*/
//  ------------------------------------------------------------------------------------------------
// Método considerando sumatoria de numeros Big Int. 

function aVeryBigSum(ar) { 
	let sum = 0n; 
	for (let i = 0; i < ar.length; i++){ 
		sum += BigInt(ar[i]); 
	} 
	return sum; 
} 
//Desde aquí hacia abajo se genera un arreglo BigInt aleatorio con el que probar la función anterior. 
let arrBig = []; 
let maxInt = Number.MAX_SAFE_INTEGER;
let arrLarge = 10;

for (let i = 0; i < arrLarge; i++){ 
	arrBig.push(BigInt(maxInt) + BigInt(Math.floor(Math.random() * maxInt))); 
}

console.log("El arreglo que se estará probando contiene los siguientes numeros:");
for (let i = 0; i < arrBig.length; i++){
	console.log(arrBig[i]);
}

console.log(`\nEste es el resultado: ${aVeryBigSum(arrBig)}`); 
