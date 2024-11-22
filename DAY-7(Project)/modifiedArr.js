const arr = [10, 15, 20, 25, 30];
let newArr = [];

for(let i=0; i<arr.length; i++){
    if(i % 2 == 0){
        let doubled = arr[i] * arr[i];
        newArr.push(doubled);
    } else{
        let halved = arr[i] / 2;
        newArr.push(halved);
    }
}

console.log(newArr);