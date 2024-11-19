let arr = [10, 20, 30, 40, 30, 50];
let target = 30;
let index;

for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
        index = i;
    }
}

console.log(index)