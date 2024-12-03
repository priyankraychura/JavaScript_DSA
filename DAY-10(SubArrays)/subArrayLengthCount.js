let arr = [2, 4, 6, 8, 1, 0];
let count = 3;

for(let i=0; i<arr.length; i++){
    let subArr = [];
    for(let j=i; j<arr.length; j++){
        subArr.push(arr[j]);
        if(subArr.length == count){
            console.log(subArr);
        }
    }
}