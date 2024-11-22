const arr = [1, 3, 5, 3, 7, 9];
let newArr = [];
let firstOcc = true;

for(let i=0; i<arr.length; i++){
    if(arr[i] == 3 && firstOcc){
        firstOcc = false;
        continue;
    }
    newArr.push(arr[i]);
}

console.log(newArr);