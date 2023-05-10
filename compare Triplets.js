
function compareTriplets(a, b) {
	let pointsA = 0; 
	let pointsB = 0;
	
	for(let i = 0; i < 3; i++){ 
		if (a[i] !== b[i]){ //If both are the same, it skips to the next number. 
			a[i] > b[i] ? pointsA++ : pointsB++; 
		}
	}
	return [pointsA, pointsB];
}

let rating_A = [17, 28, 30]; 
let rating_B = [99, 16, 8]; 

console.log(compareTriplets(rating_A, rating_B)); 

