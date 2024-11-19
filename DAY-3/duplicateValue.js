let arr = [1, 2, 3, 3, 2, 1, 4, 5, 4, 5, 5, 3, 2];
let ans = [];

for(let i=0; i<arr.length; i++){
    if(!ans.includes(arr[i])){
        ans.push(arr[i]);
    }
}

console.log(ans);
