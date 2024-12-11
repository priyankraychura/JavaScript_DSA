let arr = [1, 2, 2, 3, 3, 3];
let myMap = new Map();


arr.forEach((ele) => {
    if(!myMap.has(ele)){
        myMap.set(ele, 1);
    } else {
        myMap.set(ele, myMap.get(ele) + 1);
    }
})

console.log(myMap);