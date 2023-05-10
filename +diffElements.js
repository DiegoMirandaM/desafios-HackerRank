
function countDuplicate(numbers) {

    let repeated = 0;
    let element; 
    let contadorElement;
    
    // Ordenamos el conjunto de numeros primero
    let sortedNumbers = numbers.sort(function(x, y){
       return x - y; 
    });
    
    // Iteramos por el conjunto ordenado, 
    // si el elemento actual es igual al siguiente
    for (let i = 0; i < sortedNumbers.length; i++){
        
        if (sortedNumbers[i] == sortedNumbers[i + 1]){
            contadorElement = sortedNumbers
            console.log(`arr bef = ${sortedNumbers}`)
            repeated++;
            sortedNumbers.splice(i,2);
            console.log(`arr ahora = ${sortedNumbers}`)
        }
        
    }
    
    return repeated;
}

numbers = [1,3,3,4,4,4];


console.log(numbers); 
console.log(countDuplicate(numbers)); 

