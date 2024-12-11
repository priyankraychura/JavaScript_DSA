let arr = [1, 2, 2, 3, 4, 4, 5];

function getUnique(arr) {
    let myMap = new Set(arr);
    return myMap;
}

console.log(getUnique(arr));
