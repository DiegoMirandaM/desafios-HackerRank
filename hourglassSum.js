//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here

let arr = [];
// arr.push([1,9,1,0,0,0]);
// arr.push([0,9,0,0,0,0]);
// arr.push([1,1,1,0,0,0]);
// arr.push([0,0,2,4,4,0]);
// arr.push([0,0,0,2,0,0]);
// arr.push([0,0,1,2,4,0]);

arr.push([-1,-1,0,-9,-2,-2]);
arr.push([-2,-1,-6,-8,-2,-5]);
arr.push([-1,-1,-1,-2,-3,-4]);
arr.push([-1,-9,-2,-4,-4,-5]);
arr.push([-7,-3,-3,-2,-9,-9]);
arr.push([-1,-3,-1,-2,-4,-5]);

console.log(arr);

// function hourglassSum(arr){ //Solución considerando almacenar las sumatorias como elementos de un array.
	// let sumArr =[];
	// let tempSum = 0;
	// let maxSum;

	// for (let i = 1;i < 5;i++){ //Ciclo vertical, sub array
		// for (let j = 1;j < 5;j++){ //Ciclo horizontal, elemento
			// tempSum = arr[i][j] + arr[i - 1][j - 1]
			// + arr[i - 1][j] + arr[i - 1][j + 1]
			// + arr[i + 1][j - 1] + arr[i + 1][j]
			// + arr[i + 1][j + 1];
			// sumArr.push(tempSum);
		// }
	// }
	// //Una vez guardadas las sumas, iterar por el
	// //arreglo de resultados para obtener la
	// //cantidad más grande
	// for (let i = 0; i < sumArr.length;i++){
		// if(maxSum == undefined){
			// maxSum = sumArr[i];
		// }
		
		// if (sumArr[i] > maxSum){
			// maxSum = sumArr[i];
		// }
	// }
	// console.log(`El arreglo que contiene las sumas de los relojes es: \n${sumArr}`);
	// console.log(maxSum);
// }


function hourglassSum(arr){ //Solución sin almacenar sumatorias. 
	let tempSum = 0;
	let maxSum;

	for (let i = 1;i < 5;i++){ //Ciclo vertical, sub array
		for (let j = 1;j < 5;j++){ //Ciclo horizontal, elemento
			tempSum = arr[i][j] + arr[i - 1][j - 1]
			+ arr[i - 1][j] + arr[i - 1][j + 1]
			+ arr[i + 1][j - 1] + arr[i + 1][j]
			+ arr[i + 1][j + 1];
			
			//Si la suma mas alta aun no tiene valor, que use el primer valor:
			if(maxSum == undefined){ 
				maxSum = tempSum;
			}
			//Si la nueva suma es mayor a la que era la suma mas alta, conservar el nuevo valor como el mas alto:
			if(tempSum > maxSum){ 
				maxSum = tempSum;
			}
		}
	}
	return maxSum;
}


console.log(hourglassSum(arr));