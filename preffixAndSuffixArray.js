'use strict';

function prefixToSuffix(prefixSumArray) {
    let originalArray = [];
    let suffixArray = [];
	let sum = 0;
    
    for (let i = 0; i < prefixSumArray.length; i++){
        if(i == 0){
            originalArray.push(prefixSumArray[0]);
        }
        else{
            originalArray.push(prefixSumArray[i] - prefixSumArray[i - 1]);
        }
    }
    
	console.log(`\tArray inicial: ${prefixSumArray}`);
	console.log(`\tArray original: ${originalArray}`);
	
    for (let i = originalArray.length - 1; i >= 0; i--){
		sum+= originalArray[i];
        suffixArray.unshift(sum);
    }
    return suffixArray;

}

let arr = [4,1,2,3,4];

console.log(prefixToSuffix(arr));