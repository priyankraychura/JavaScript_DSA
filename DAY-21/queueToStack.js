let s1 = []
let s2 = []

function data(val) {
    while (s1.length > 0) {
        s2.push(s1.pop());
    }

    s1.push(val);

    while (s2.length > 0) {
        s1.push(s2.pop());
    }
}

data(10)
data(20)
data(30)
data(40)
data(50)

console.log(s1.pop());
