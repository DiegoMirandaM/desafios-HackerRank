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