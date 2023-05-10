'use strict';

function getSecondLargest(nums) {
    let largest = 0;
    let secondLargest = 0;
	
    nums.forEach(num => {
        if(num > largest){
			secondLargest = largest;
            largest = num;
		console.log("largest: " + largest);
		console.log("secondLargest: "+ secondLargest);
        }
        else if(num < largest && num > secondLargest){
            secondLargest = num;
			console.log("largest untouched. SecondLargest: " + secondLargest);
        }
	});
    console.log(nums);
	console.log("");
	console.log("BIGGEST LARGEST NUM: " + largest);
	console.log("BIGGEST SECOND - LARGEST NUM: " + secondLargest);
    return secondLargest;
}

//let arr = [10,9,9,8,8,11,8,0,9,1];
let arr = [2,3,6,6,5];

console.log(getSecondLargest(arr));