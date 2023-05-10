'use strict';

function isPositive(a) {
    try{
		console.log(`El numero en cuestión es ${a}`);
        if (a > 0){
            return "YES";
        }
        else if (a === 0){
            throw "Zero Error";
        }
        else if (a < 0){
            throw "Negative Error";
        }
    }catch(e){
		return e;
	}
    
}

let test_0 = 3
let test_1 = 0
let test_2 = -5
let test_3 = -1890345


console.log(isPositive(test_0));
console.log(isPositive(test_1));
console.log(isPositive(test_2));
console.log(isPositive(test_3));

// isPositive(test_0);
// isPositive(test_1);
// isPositive(test_2);
// isPositive(test_3);
