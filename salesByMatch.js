'use strict'

//n = Cantidad de calcetines. arr = arreglo con los calcetines. 
//Determinar cuantos pares de calcetines con color coincidente (pares de numeros) existen.
function sockMerchant(n, arr){
	let updatedArray = arr;
	let selectedSock = 0;
	let totalPairs = 0;
	let socks = 0;
	
	while (updatedArray.length > 0){
		selectedSock = updatedArray[0];
		socks = 0;
		console.log(`\nArray Updateado:`);
		console.log(updatedArray);
		console.log(`\nSock Seleccionado: ${selectedSock}`);
		
		for(let i = 0; i < updatedArray.length; i++){ //Ciclo para contar las instancias del calcetin en cuestion:
			//console.log(`Indice: ${i}  Elemento: ${updatedArray[i]}`);
			if(updatedArray[i] == selectedSock){
				socks++;
				console.log(`Coincidencia entre ${updatedArray[i]} y ${selectedSock}! Contador aumenta a ${socks}`);
			}
		}
		
		totalPairs += Math.floor(socks/2);
		console.log(`Pares totales: ${totalPairs}`);
		updatedArray = updatedArray.filter(sock => sock != selectedSock);
	}
	return totalPairs;
}




//let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let arr = [1,1,3,1,2,1,3,3,3,3];

console.log(`\tRESULTADO FINAL: ${sockMerchant(arr.length,arr)}`);