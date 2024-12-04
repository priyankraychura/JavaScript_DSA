function firstNaturalNumbers(n){
    if(n == 0){
        return 1;
    }

    return n * firstNaturalNumbers(n - 1)
}

console.log(firstNaturalNumbers(5))