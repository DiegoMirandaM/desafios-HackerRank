
const a = [1, 2, 3, 4, 3, 2, 1,4,20];

function lonelyinteger(a) {
    let lonelyNum;

    for (let i = 0; i < a.length; i++) {
        const firstNum = a[i];
        lonelyNum = firstNum;

        for (let j = 0; j < a.length; j++) {

            // Omitir comparar el primer num consigo mismo.
            if (j !== i) {
                const secondNum = a[j];

                // Si el numero esta repetido, vaciar la variable que contendra el num unico, y pasar a la sig iteracion
                if (firstNum === secondNum) {
                    lonelyNum = undefined;
                    break;
                }
            }
        }

        // Si al terminar el ciclo externo, el num unico no fue vaciado significa que realmente es unico, devolverlo y terminar ahi.
        if (lonelyNum !== undefined) return lonelyNum;

    }
    
}

console.log(lonelyinteger(a)) ;