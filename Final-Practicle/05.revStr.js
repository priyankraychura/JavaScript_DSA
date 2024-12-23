let str = "hello";
let stack = [];
let revStr = "";

for(char of str) {
    stack.push(char);
}

while(stack.length > 0) {
    revStr += stack.pop();
}

console.log(revStr);
