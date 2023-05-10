function countApplesAndOranges(s, t, a, b, apples, oranges){ 
	let appleCounter = 0; 
	let orangeCounter = 0; 
	let positionAfterMovement = 0;
	
	apples.forEach(appleMovement => {
		positionAfterMovement = a + appleMovement; 
		if(positionAfterMovement >= s && positionAfterMovement <= t){
			appleCounter++;
		}
	});
	
	oranges.forEach(orangeMovement => {
		positionAfterMovement = b + orangeMovement; 
		if(positionAfterMovement >= s && positionAfterMovement <= t){
			orangeCounter++; 
		}
	});
	
	console.log(appleCounter); 
	console.log(orangeCounter); 
}

let s = 7; let t = 11; 
let a = 5; let b = 15; 
let appleDistance = [-2, 2, 1]; 
let orangeDistance = [5, -6]; 

countApplesAndOranges(s, t, a, b, appleDistance, orangeDistance); 