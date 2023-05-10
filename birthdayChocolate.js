const s = [2,2,1,3,2];  // Chocolate en una fila

const d = 4;            // Sumatoria objetivo
const m = 2;            // Largo de los subconjuntos

function birthday(s, d, m) {
    let positilities = 0;

    // Iterar tomando todos los posibles subconjuntos de largo m, sumatoria de sus valores.
    // Si la sumatoria es igual a d, entonces es una posibilidad valida. 
    for (let i = 0; (i + m - 1) < s.length; i++){
        if (s.slice(i, i + m).reduce( (acc, val) => acc + val ) == d) positilities++;
    }

    return positilities;

}

console.log(birthday(s,d,m));
