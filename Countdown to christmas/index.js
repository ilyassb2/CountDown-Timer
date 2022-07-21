
function countdown() { 
const countDate = new Date("December 25, 2022 00:00:00 ").getTime();// getTime() coverts and gives the date entered in milliseconds 
const now = new Date().getTime(); // gets the current date.
const timeTheCountBeUp = (countDate - now)  ;

// We tell how time works ex , how many seconds in a min
const second = 1000 ;
const min = second * 60 ;
const hour = min * 60 ;
const day = hour * 24 ;

// we can calculate now 

const textDay = Math.floor(timeTheCountBeUp / day) ;
const textHour = Math.floor((timeTheCountBeUp % day) / hour);
const textMin = Math.floor ((timeTheCountBeUp % hour) / min);
const textSec = Math.floor ((timeTheCountBeUp % min) / second);

document.querySelector("#days").innerText = textDay ;
document.querySelector("#hours").innerText = formatTime(textHour) ;
document.querySelector("#minutes").innerText = formatTime(textMin) ;
document.querySelector("#seconds").innerText = formatTime(textSec) ;

//adding 0 in front of second / minutes / hours when they are under 10 ( ex : 09 ....)

function formatTime (time) {
    return time < 10 ? `0${time}` : time ;  // ternary operator is like a shortcut for if statement
}



};

 countdown();
 setInterval(countdown, 1000);





