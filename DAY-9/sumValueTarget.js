let arr = [1, 5, 6, 9, 12, 13, 15];

let target = 15;
let start = 0;
let end = arr.length - 1;

function sumValueTarget(){
    while(start < end){
        let sum = arr[start] + arr[end];
    
        if(sum == target){
            return [start, end];
        } else if(sum > target){
            end--;
        } else{
            start++;
        }
    }

    return -1;
}

console.log(sumValueTarget())