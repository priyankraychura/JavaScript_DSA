let str = "A man, a plan, a canal: Panama";
let revStr = "";
let newStr = "";

for(let i=str.length -1 ; i>=0; i--){
    if(str[i] == " " || str[i] == "," || str[i] == ":"){
        continue;
    } else{
        revStr += str[i].toLowerCase();
    }
}

for(let i=0; i<str.length ; i++){
    if(str[i] == " " || str[i] == "," || str[i] == ":"){
        continue;
    } else{
        newStr += str[i].toLowerCase();
    }
}

console.log("The given string is palidrome: ", newStr==revStr);