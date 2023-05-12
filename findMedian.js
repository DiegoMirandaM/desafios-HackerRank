const arr = [5,3,1,2,4,0,9, 20, 100, -10, -999];

function findMedian(arr) {
    const newArr = JSON.parse(JSON.stringify(arr));

    newArr.sort( (a,b) => a-b)

    const result = newArr[Math.floor(newArr.length / 2)];

    return result;

}



console.log(findMedian(arr)) ;