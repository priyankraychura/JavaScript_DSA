let arr = [2, 4, 6, 8, 1, 0];
let targetSum = 8;

for(let i=0; i<arr.length; i++){
    let subArr = [];
    let sum = 0;
    for(let j=i; j<arr.length; j++){
        subArr.push(arr[j]);
        sum += arr[j];

        if(sum == targetSum){
            console.log(subArr);
        }
    }
}