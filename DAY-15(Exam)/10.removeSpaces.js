let str = "hello world python";
let newStr = "";

for(let i=0; i<str.length; i++){
    if(str[i] == " "){
        continue;
    }
    newStr += str[i];
}

console.log(newStr);



