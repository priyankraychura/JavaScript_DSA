let arr = [3, 7, 1, 5, 9, 0, 2];
let target = 5;
let isFound = false;

for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
        isFound = true;
        break;
    }
}

console.log(isFound)