let arr = [1, 2, 2, 3, 4, 4, 5, 2];
let target = 2;
let obj = {};

for(let i=0; i<arr.length; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    } else{
        obj[arr[i]]++;
    }
}

console.log(obj);
console.log(obj[target]);

let max = 0;
let maxKey = 0;
for(key in obj){
    if(obj[key] > max){
        maxKey = key;
        max = obj[key];
    }
}

console.log(maxKey, "=>", max);