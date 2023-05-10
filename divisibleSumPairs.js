
const ar = [1, 2, 3, 4, 5, 6];   // Arreglo de numeros enteros.
const ar2 = [1, 3, 2, 6, 1, 2];
const ar3 = [43, 95, 51, 55, 40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47, 73, 25, 27, 14, 8, 26, 58, 95, 28, 3, 23, 48, 69, 26, 3, 73, 52, 34, 7, 40, 33, 56, 98, 71, 29, 70, 71, 28, 12, 18, 49, 19, 25, 2, 18, 15, 41, 51, 42, 46, 19, 98, 56, 54, 98, 72, 25, 16, 49, 34, 99, 48, 93, 64, 44, 50, 91, 44, 17, 63, 27, 3, 65, 75, 19, 68, 30, 43, 37, 72, 54, 82, 92, 37, 52, 72, 62, 3, 88, 82, 71]
const k = 5;                // Int divisor. 
const k2 = 3;
const k3 = 22;

const n = 6;                // Largo del array.



function divisibleSumPairs(n, k, ar) {
    let pairs = 0;

    for (let i = 0; i < (ar.length - 1); i++) {
        const firstValue = ar[i];

        for (let j = i + 1; j < (ar.length); j++) {
            const secondValue = ar[j];

            const isDivisibleByK = (firstValue + secondValue) % k == 0;

            if (isDivisibleByK) {
                pairs++;
            }

        }

    }

    return pairs;
}

console.log(divisibleSumPairs(n, k3, ar3));