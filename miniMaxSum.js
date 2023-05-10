function miniMaxSum(arr) { 
	let minNum = arr[0]; 
	let maxNum = arr[0]; 
	let sumatoriaArr = 0; 
	let resultadoTxt = "";
	
	for(let i = 0; i < arr.length; i++){ 
		if(arr[i] > maxNum){ 
			maxNum = arr[i]; 
		} 
		if(arr[i] < minNum){ 
			minNum = arr[i]; 
		} 
		sumatoriaArr += arr[i];
	} 
	/*
	console.log(`Arreglo original: ${arr}`); 
	console.log(`Número máximo: ${maxNum}`); 
	console.log(`Número mínimo: ${minNum}`); 
	console.log(`Sumatoria: ${sumatoriaArr}`); 
	
	console.log(`Suma Mínima: ${sumatoriaArr-maxNum}`); 
	console.log(`Suma Maxima: ${sumatoriaArr-minNum}`); 
	*/
	
	console.log((sumatoriaArr-maxNum).toString() + " " + (sumatoriaArr-minNum).toString());
	
} 

arr = [1, 3, 5, 7, 9]; 

miniMaxSum(arr); 