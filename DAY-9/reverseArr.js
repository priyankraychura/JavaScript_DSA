let arr = [1, 2, 4, 6, 7, 12, 15, 99];

let start = 0;
let end = arr.length - 1;

while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
}

console.log(arr);