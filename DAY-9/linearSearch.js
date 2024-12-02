let arr = [1, 5, 7, 9, 12, 13];
let target = 9;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == target){
//         console.log("Found value at index ", i);
//     }
// }

let start = 0;
let end = arr.length - 1;

while(start < end){
    if(arr[start] == target || arr[end] == target){
        console.log("Found value at index");
    }
    start++;
    end--;
}