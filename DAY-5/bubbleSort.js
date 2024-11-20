let arr = [102, 12, 45, 6, 23, 13, 67, 33, 99]
let sorted = false;

// for(let i=0; i<arr.length; i++){
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] > arr[i+1]){
//             let temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//             sorted = true;
//         }
//     }

//     if(sorted == false){
//         break;
//     }
// }

// console.log(arr)

let i = arr.length;

do{
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            sorted = true;
        }
    }

    i--;
    
} while(sorted && i)

console.log(arr);
