function fibonacci(n, first, second){
    if(n == 0){
        console.log(first);
        return 0;
    }

    return first + fibonacci(n - 1, second, first + second);
}

fibonacci(7, 0, 1)