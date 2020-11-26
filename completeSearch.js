// Bubble Sort
let vetor = [4, 3, 6, 8, 10, 1, 2, 5, 7, 9];

// o último elemento ficará na ordem correta já na primeira iteração
// o índice do último elemento pode diminuir a cada iteração, diminuindo o total de comparações
// há uma sintaxe específica para trocar os valores de duas variáveis [a, b] = [b, a]
const bubbleSort = arr => {
    for (let j = arr.length-1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
    }
    return arr;
}

let ordenado = bubbleSort(vetor);
console.log(ordenado);


// Binary Search
const binarySearch = (arr, item) => {
    let left = 0;
    let right = arr.length-1;
    let found = false;
    
    if (item < arr[left] || item > arr[right]) {
        return -1;
    }
    
    while (right >= left && !found) {
        var mid = parseInt((left + (right - left)/2));
        if (arr[mid] === item) {
            found = true;
        } else if (item < arr[mid]) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return mid;
}

let x = parseInt(prompt('Digite um número de 1 a 10 para saber sua posição no vetor.'));
document.write(`Número ${x} encontrado na ${binarySearch(ordenado, x)+1}ª posição.`);