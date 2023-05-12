arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

function diagonalDifference(arr) {
    let leftToRightSum = 0; let rightToleftSum = 0;

    // Iterar por cada conjunto para obtener y sumar los valores respectivos.
    for (let i = 0; i < arr.length; i++){
        // Obtenemos y sumamos los numeros diagonalmente, usando el mismo ciclo.
        leftToRightSum += arr[i][i];
        rightToleftSum += arr[arr.length - 1 - i][i];
    }

    return Math.abs(leftToRightSum - rightToleftSum);
}

diagonalDifference(arr);

console.log(diagonalDifference(arr));