const arr = [2, 5, 8, 11, 14];
let newArr = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        let square = arr[i] * arr[i];
        newArr.push(square);
    } else{
        newArr.push(arr[i]);
    }
}

console.log(newArr)