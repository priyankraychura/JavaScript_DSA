let s1 = [];
let s2 = [];

function data(val) {
    s1.push(val);

    s2.push(s1.pop())

    [s1, s2] = [s2, s1]
}

data(10)
data(20)
data(30)
data(40)
data(50)

console.log(s2);
