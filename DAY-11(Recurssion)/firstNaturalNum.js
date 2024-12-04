function firstNaturalNumbers(n){
    if(n == 0){
        return;
    }

    firstNaturalNumbers(n - 1)
    console.log(n);
}

firstNaturalNumbers(5)