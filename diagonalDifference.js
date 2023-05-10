
function diagonalDifference(arr) { 
    // Write your code here 
    let leftToRightSum = 0; 
    let rightToleftSum = 0; 
    
    
    //console.log(`Largo array: ${arr.length}`); 
    for (let i = 0; i < arr.length; i++){ //Itera por cada array dentro de arr. 
		
		//console.log(`Elemento actual del ciclo ${i}: ${arr[i][arr.length - i]}`); 
		leftToRightSum += arr[i][i]; 
		/*
		console.log(`\t\tIndice del elemento fallido:`);
		console.log(`\t\t ${(arr.length - 1) - i}`);
		*/
		rightToleftSum += arr[i][(arr.length - 1) - i];
		
        /*for(let j = 0; j < arr[i].lenght; j++){ //Este itera por cada elemento dentro de los arrays que componen arr. 
			leftToRightSum += arr[i][] 
		} */
    } 
	
	//console.log(`\tEl resultado de leftToRightSum es: ${leftToRightSum}. \n\tY el resultado de rightToleftSum es: ${rightToleftSum}`);
	
	return Math.abs(leftToRightSum - rightToleftSum); 
} 

let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]; 

console.log(`Arreglo original:`); 
console.log(arr);
console.log(`Resultado final: ${diagonalDifference(arr)}`); 
