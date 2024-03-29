'use strict';

const inputDaysTimer = 20;
const inputHouersTimer = 0;
const inputMinutesTimer = 0;
const inputSecondsTimer = 3;

const deadLine = (Date.parse(new Date()) + (inputDaysTimer * 60 * 60 * 1000 *24) + (inputHouersTimer * 60 * 60 * 1000) + (inputMinutesTimer * 60 * 1000) + (inputSecondsTimer) * 1000);


function  getNumTimer (endTime){
    let days = '';
    let hours = '';
    let minutes = '';
    let seconds = '';
    /* let t = Date.parse(endTime) -Date.parse(new Date()); */
    let t = endTime -Date.parse(new Date());
    console.log(t);
    if( t <=0 ){
       days = 0;
       hours = 0;
       minutes = 0;
       seconds = 0;
       console.log(days, hours, minutes, seconds);
    }else{
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        hours = Math.floor(t / (1000 * 60 * 60 ) % 24);
        minutes = Math.floor(t / (1000 * 60 ) % 60);
        seconds = Math.floor(t / (1000  ) % 60);
        console.log(days, hours, minutes, seconds);
    }
    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}
function getZero(num) {
    if(num >=0 && num < 10){
       return `0${num}`;
    }else{
       return num;
    }
 }

getNumTimer (deadLine)

function outputValue ( endTime) {
    const daysOut = document.querySelector('.num__day');
    const hoursOut = document.querySelector('.num__hours');
    const minutesOut = document.querySelector('.num__minutes');
    // const minutesOutTurn = document.querySelector('.turn');
    const secondsOut = document.querySelector('.num__seconds');
    const secondsOutTurn = document.querySelector('.turn');
    timeInterval = setInterval(updateClock, 1000);

    function updateClock () {
        const timeValue = getNumTimer (endTime)
        daysOut.innerHTML = getZero(timeValue.days);
        hoursOut.innerHTML = getZero(timeValue.hours);
        minutesOut.innerHTML = getZero(timeValue.minutes);
        // minutesOutTurn = getZero(timeValue.minutes);
        secondsOut.innerHTML = getZero(timeValue.seconds);
        secondsOutTurn.innerHTML = getZero(timeValue.seconds);

        if(timeValue.t <= 0){
         clearInterval(timeInterval);
        }
    } 
}
outputValue (deadLine)