function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length;i++){
        sum = sum + ar[i];
    }
	console.log(sum);
    return sum;
}

let ar = [1, 2, 3, 4, 10, 11];
simpleArraySum(ar);