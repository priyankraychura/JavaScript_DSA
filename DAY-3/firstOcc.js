let arr = [10, 20, 30, 40, 30, 50];
let target = 30;
let index;
let flag = true;

for(let i=0; i<arr.length; i++){
    if(flag){
        if(arr[i] == target){
            index = i;
            flag = false;
        } else{
            index = -1;
        }
    }
}

console.log(index)