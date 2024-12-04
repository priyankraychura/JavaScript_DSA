function firstNaturalNumbers(n){
    if(n == 0){
        return;
    }

    n -= 1;
    firstNaturalNumbers(n)
    console.log(n);
}

firstNaturalNumbers(5)