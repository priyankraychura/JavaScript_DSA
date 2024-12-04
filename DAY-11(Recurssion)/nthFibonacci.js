function fibonacci(n, fib, sum){
    if(n == 5){
        return sum;
    }

    return sum + fibonacci(n+1, fib + sum, sum)
}

console.log(fibonacci(5, 0, 0))