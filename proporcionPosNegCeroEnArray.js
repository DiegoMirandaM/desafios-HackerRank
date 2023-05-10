function plusMinus (arr){
	let cantPositivos = 0;
	let cantNegativos = 0;
	let cantCeros = 0;
	let cantValores = arr.length;
	
	for (let i = 0; i < arr.length; i++){
		if (arr[i] > 0){
			cantPositivos++;
		}
		else if (arr[i] == 0){
			cantCeros++;
		}
		else{
			cantNegativos++;
		}
	}
	
	console.log((cantPositivos / cantValores).toFixed(6)); 
	console.log((cantNegativos / cantValores).toFixed(6)); 
	console.log((cantCeros / cantValores).toFixed(6)); 
} 


arreglo = [1,1,0,-1,-1]; 

plusMinus(arreglo);