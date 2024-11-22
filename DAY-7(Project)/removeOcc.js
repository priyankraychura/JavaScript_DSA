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

//Alternate method
const secondArr = [1, 3, 5, 3, 7, 9];
let exists = true;

for(let i=0; i<secondArr.length; i++){
    if(secondArr[i] == 3 && exists){
        exists = false;
        secondArr.splice(i, 1);
    }
}

console.log(secondArr)