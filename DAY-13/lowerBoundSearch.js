let arr = [1, 2, 2, 2, 3, 4, 6, 7, 8];
let target = 5;
let start = 0;
let end = arr.length;
let ans = arr.length;

while(start < end){
    let mid = Math.floor((start + end)/2);

    if(arr[mid] >= target){
        ans = mid;
        end = mid;
    } else{
        start = mid + 1;
    }
}

console.log(ans);
