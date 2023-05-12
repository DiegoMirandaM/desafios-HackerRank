function hourglassSum(arr) {
    let maxSum = -63;
    let actualSum = 0;
    
    for (let i = 1; i < arr.length - 1; i++){
        for (let j = 1; j < arr[i].length - 1; j++){
            actualSum = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] 
                                + arr[i][j] + 
                        arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1]; 
            
            if (maxSum < actualSum ) maxSum = actualSum ;
        }
    }
    return maxSum; 

}

let arr = [	[1, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0], 
			[1, 1, 1, 0, 0, 0], 
			[0, 0, 2, 4, 4, 0], 
			[0, 0, 0, 2, 0, 0], 
			[0, 0, 1, 2, 4, 0]];

let arreglito2D = [ [1,2,3,4,5], [6,7,8,9,10], [1,2,3,4,5], [9,45,27,27,18,19391,'Angelita te amo mucho! Mucho mucho y harto harto! :D'] ]

let objetoDelArreglito = arreglito2D[3][6];

console.log(`\n\tMensaje muy importante! ${objetoDelArreglito} `);