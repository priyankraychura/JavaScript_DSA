let arr = [1, 2, 3, 4, 5, 6];
let target = 4;
let isFound = false;

for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
        isFound = true;
    }
}

console.log("Does target exists: ", isFound);