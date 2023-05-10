'use strict';

function processData(input) {
	let originalArray = input.split("\n")[1].split(" ").map((item) => parseInt(item));  
	
    let mean = 0;
	let medianIndex;
    let median = 0;
    let orderedArr = [];
	
	let mode;
	let tempMode;
	let counter = 0;
	let maxCounter = 0;
	let arrLen;
    
    for(let i = 0; i < originalArray.length; i++){
        mean += originalArray[i];
		orderedArr.push(originalArray[i]);
    }
    mean = (mean / originalArray.length).toFixed(1); //Saca el promedio o Media y lo deja con un solo decimal. 
	
	orderedArr.sort((a,b) => a-b); //Ordena de alguna forma el orderedArr segun cantidades numericas. 
	arrLen = orderedArr.length;
	
	if(arrLen % 2 != 0){ //Si la cantidad de elementos en el conjunto es impar.
		medianIndex = Math.floor(arrLen/2); //
		median = orderedArr[medianIndex];
	}else{ //Si la cantidad es par, entonces se suman los dos elementos del medio del arreglo, el resultado se divide en 2, y se deja con un decimal. 
		median = (((orderedArr[arrLen/2] + orderedArr[(arrLen/2) - 1])) / 2).toFixed(1);
	}
	
	for(let i = 0; i < arrLen; i++){ //Loopea por el arreglo ordenado.
        if(tempMode == undefined){ //Se inicializa tomando el primer valor.
			tempMode = orderedArr[i];
		}
		if(tempMode == orderedArr[i]){ //Si el siguiente es el mismo elemento, aumenta el contador.
			counter++;
		}else{ //Si el elemento es distinto...
			if(counter > maxCounter){ //Si el contador actual es mayor al contador maximo, ese elemento es la moda y el contador
				maxCounter = counter;
				mode = orderedArr[i - 1];
			}
			tempMode = orderedArr[i];
			counter = 1;
		}
    }
	//console.log(`Array original: [${originalArray}]`);
	//console.log(orderedArr);
	
	console.log(mean);
	console.log(median);
	console.log(mode);
	

} 

/*
//Parte del codigo predefinido del Hacker Rank para tomar input desde consola, presuntamente.
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
*/


//let arr = [64630,11735,11735,14216,14216,99233,99233,14470,4978,73429,38120,51135,67060,14216];

let stringArr = "10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060"

processData(stringArr);