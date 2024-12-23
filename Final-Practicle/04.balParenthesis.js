let str = "({[]})";
let arr = []

let obj = {
    "]" : "[",
    "}" : "{",
    ")" : "("
}

function balanceParenthesis() {
    for(char of str){
        if(char == "[" || char == "{" || char == "(") {
            arr.push(char);
        } else if(char == "]" || char == "}" || char == ")") {
            if(arr.length > 0 && arr.pop() != obj[char]){
                return false;
            }
        }
    }

    return arr.length == 0;
}

console.log(balanceParenthesis());
