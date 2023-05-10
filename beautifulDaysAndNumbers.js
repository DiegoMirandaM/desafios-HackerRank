function beautifulDays(i, j, k) {
    let beautifulCounter = 0; 
    let actualDay = i; 
    let reversedNumber; 
    
    while (actualDay <= j){ 
        reversedNumber = parseInt(actualDay.toString().split("").reverse().join("")); 
		// console.log(`Actual = ${actualDay}, Invertido: ${reversedNumber}, resta absoluta: ${Math.abs(actualDay - reversedNumber)}, resto de la división: ${Math.abs(actualDay - reversedNumber) % k}, CONTADOR: ${beautifulCounter}`); 
        if (Math.abs(actualDay - reversedNumber) % k == 0){
            beautifulCounter++;
        }
        actualDay++;
    }
    
    return beautifulCounter; 
}


console.log(beautifulDays(13, 45, 3));