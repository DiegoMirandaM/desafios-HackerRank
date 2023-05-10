/*
// Only change code below this line
function countdown(n){ 
  
  if (n < 1){ 
    return []; 
  } 
  else{ 
    const finalArray = countdown(n - 1); 
	finalArray.unshift(n); 
	return finalArray; 
  } 
} 
// Only change code above this line 

console.log(countdown(10)); 
*/ 

function rangeOfNumbers(startNum, endNum){ 
	if (startNum >= endNum + 1){ 
		return []; 
	} 
	else{ 
		const newArr = rangeOfNumbers(startNum + 1, endNum); 
		newArr.unshift(startNum); 
		return newArr; 
	} 
}; 

console.log(rangeOfNumbers(4, 4)); 
