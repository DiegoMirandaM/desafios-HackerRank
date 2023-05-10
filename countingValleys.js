'use strict' 

function countingValleys(steps, path){ 
	let altitude = 0; 
	let maxValue; 
	let totalOfValleys = 0;
	
	for (let i = 0; i < path.length; i++){ //Iterar a lo largo del string de desplazamientos. 
		// console.log(`  ${path[i]}`);
		if(path[i] == "U"){ //Si el trayecto es hacia arriba (U), aumentar la altitud actual. 
			altitude++; 
			// console.log(`\t\tTrayecto hacia arriba! Altitud actual: ${altitude}  altitud MAX: ${maxValue}`);
		}
		else if(path[i] == "D"){ //Si el trayecto es hacia abajo (D), reducir la altitud actual. 
			altitude--; 
			// console.log(`\t\tTrayecto hacia ABAJO! Altitud actual: ${altitude}  altitud MAX: ${maxValue}`);
		}
		if(maxValue == undefined || maxValue > altitude){ //Si el valor maximo no esta definido, o si la nueva altitud es menor al valor maximo, valor maximo = altitud actual.
			maxValue = altitude;
			// console.log(`\tLa altitud maxima cambio! Nueva altitud MAX: ${maxValue}`);
		}
		if(altitude == 0 && maxValue < 0){//Si la altitud es o se vuelve 0, y el valor maximo es inferior a 0, eso cuenta como un valle. 
			totalOfValleys++;
			maxValue = 0
		}
		
	}
	return totalOfValleys;
	
}

let steps = 8;
let path = "UDDDUDUU";

console.log(`Total of valleys: ${countingValleys(steps, path)}`);