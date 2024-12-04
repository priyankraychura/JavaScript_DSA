function firstNaturalNumbers(arr, n){
    if(n == 0){
        return 0;
    }

    n -= 1;
    return arr[n] + firstNaturalNumbers(arr, n);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]
let size = arr.length;

console.log(firstNaturalNumbers(arr, size))