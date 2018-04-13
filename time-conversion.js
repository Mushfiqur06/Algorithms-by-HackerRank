function timeConversion(s) {
    //break up time data
    var timeArr = s.split(':');
    
    var hours = parseInt(timeArr[0]);
    var minutes = timeArr[1];
    var seconds = timeArr[2];
    
    //decide if its PM
    var isPm;
    if(seconds.charAt(2) == 'P'){
        isPm = true;
    }else{
        isPm = false;
    } 

    //if its PM then 12 must be added to the hours
    if(isPm && hours < 12){
        hours += 12;
    }
    
    //handle midnight
    if(!isPm && hours == 12){
        hours = "0";
    };
    
    seconds = seconds.slice(0, 2);
    //format 0 onto single digit hours
    if(!isPm && hours < 10){
        hours = "0"+ hours;
    }
    
    return (hours + ":" + minutes + ":" + seconds);

}