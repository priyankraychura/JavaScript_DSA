function fibonacci(n, first, second){
    if(n == 0){
        console.log(first);
        return;
    }

    n -= 1;
    return first + fibonacci(n, second, first + second);
}

fibonacci(7, 0, 1)