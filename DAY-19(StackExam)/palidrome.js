let str = "Kanak";
let stack = [];

for(let char of str){
    stack.push(char);
}

let revStr = "";

while(stack.length > 0){
    revStr += stack.pop();
}

if(str.toLowerCase() == revStr.toLowerCase()){
    console.log("Palidrome String");
} else{
    console.log("Not a palidrome");  
}


