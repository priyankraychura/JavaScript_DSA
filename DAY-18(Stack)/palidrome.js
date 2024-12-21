class Stack {
    constructor() {
        this.arr = [];
    }

    push(el) {
        this.arr.push(el);
    }

    isEmpty() {
        return this.arr.length == 0;
    }

    pop() {
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.arr.pop();
    }

    peek() {
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.arr[this.arr.length - 1];
    }

    size() {
        return this.arr.length;
    }

    print(){
        return this.arr;
    }
}

let str = "nayan";
let stk = new Stack();

for(let char of str){
    stk.push(char);
}

let revStr = "";
while(!stk.isEmpty()) {
    revStr += stk.pop();
}

if(str == revStr) {
    console.log("Palidrome");
} else {
    console.log("Not Palidrome");
}