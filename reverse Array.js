

function reverseArray(a){
	let reversedArr = [];
	
	for (let i = a.length - 1; i >= 0; i--){
		reversedArr.push(a[i]);
	}
	return reversedArr;
}

let arr = [1,4,3,2];

console.log(`El arreglo original es: ${arr}`);

console.log(`\nY el resultado es igual a: ${reverseArray(arr)}`); 