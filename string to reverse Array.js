'use strict';


function reverseString(s) {
    try{
        let arrayOfChars = s.split("");
		let result = "";
        for (let i = arrayOfChars.length - 1; i >= 0; i--){
			result += arrayOfChars[i];
		}
		console.log(result);
        
    }catch(e){
        console.log(e.message);
		console.log(s)
    }
}


// let s_0 = "1234";
// let s_1 = Number(1234);

// console.log("");
// reverseString(s_0);
// console.log("-_-_-_-_-_-_-_-_-_-_-_-_");
// reverseString(s_1);