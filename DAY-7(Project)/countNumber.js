const numbers = [7, 3, 7, 8, 2, 7, 4];
let target = 7;
let counter = 0;

for(let i=0; i<numbers.length; i++){
    if(numbers[i] == target){
        counter++;
    }
}

console.log("Number of times 7 apperas in an array: ", counter)