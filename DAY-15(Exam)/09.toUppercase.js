let str = "hello world";
let newStr = "";

for(let i=0; i<str.length; i++){
    if(str[i] == " "){
        newStr += str[i + 1].toUpperCase();
        continue;
    } else{
        newStr += str[i];
    }
}

console.log(newStr)