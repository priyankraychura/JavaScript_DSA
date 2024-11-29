let arr = [];

for(let i=0; i<3; i++){
    let nestedArr = []
    for(let j=0; j<3; j++){
        let num = Math.floor(Math.random() * 10);
        nestedArr.push(num)
    }
    arr.push(nestedArr);
}

console.log(arr);