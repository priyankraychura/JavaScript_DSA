let arr = [23, 45, 11, 56, 33, 48, 57, 99, 12, 32, 55];

arr.sort((a, b) => a - b);
console.log(arr) //Array in ascending order
console.log(arr[1]) //Second smallest value

arr.sort((a, b) => b - a);
console.log(arr) //Array in descending order
console.log(arr[1]) //Second hihest value
