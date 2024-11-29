function timeConversion(s) {
    let str = s[s.length-2] + s[s.length-1];
    let date = s.split(":", 3);
    let hour = date[0];
    let minute = date[1];
    let second = date[2];
    let sec = second[0] + second[1];
    
    if(str == "PM"){
        hour = Number(date[0]);
        if(hour == 12){
            hour = date[0]
        } else{
            hour += 12;
        }
    } else{
        if(hour == 12){
            hour = "00";
        } else{
            hour = date[0];
        }
    }
    
    return hour+":"+minute+":"+sec;

}

let s = "12:45:54PM";

console.log(timeConversion(s));