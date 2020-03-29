const pomodoro = document.getElementById("box-1");
const shortBreak = document.getElementById("box-2");
const longBreak = document.getElementById("box-3");

pomodoro.addEventListener("click", pomodoroEvent);
shortBreak.addEventListener("click", shortBreakEvent);
longBreak.addEventListener("click", longBreakEvent);

const start = document.getElementById("btn1");
const stopBtn = document.getElementById("btn2");
const reset = document.getElementById("btn3");

start.addEventListener("click", startEvent);
stopBtn.addEventListener("click", stopEvent);
reset.addEventListener("click", resetEvent);

const timeC = document.getElementById("time");
var currentTime = 1500000;
timeC.innerHTML = millisToMinutesAndSeconds(currentTime);


class PomodoroClass{
    constructor(){
        this.stoper = 0;
        this.curr = 0;
        this.timeStr = "";
    }
    start = function (x) {
        this.stoper = 0;
        let t = setInterval(() =>{
            
            if(this.stoper === 1 || x < 0){
                clearInterval(t);
            }
            else{
                this.timeStr =  millisToMinutesAndSeconds(x);
                timeC.innerHTML = this.timeStr;
                currentTime = x;
                x -= 1000;
            }
        },1000)
    }

    stop = function () {
        this.stoper = 1;
    }

}

const helper = new PomodoroClass;
var currentPage = 0;

function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


function pomodoroEvent(event) {
    pomodoro.className = "box selected-option";
    shortBreak.className = "box";
    longBreak.className = "box";
    currentTime = 1500000;
    currentPage = 0
    helper.stop();
    timeC.innerHTML = millisToMinutesAndSeconds(currentTime);


}

function shortBreakEvent(event) {

    pomodoro.className = "box";
    shortBreak.className = "box selected-option";
    longBreak.className = "box";
    currentTime = 300000;
    currentPage = 1;
    helper.stop();
    timeC.innerHTML = millisToMinutesAndSeconds(currentTime);

}

function longBreakEvent(event) {

    pomodoro.className = "box";
    shortBreak.className = "box";
    longBreak.className = "box selected-option";
    currentTime = 600000;
    currentPage = 2;
    helper.stop();
    timeC.innerHTML = millisToMinutesAndSeconds(currentTime);

}



function startEvent(event){
    helper.start(currentTime);
}

function stopEvent(event){
    helper.stop();
}

function resetEvent(event){
    helper.stop();
    if(currentPage === 0){
        currentTime = 1500000;
        
    }
    else if(currentPage === 1){
        currentTime = 300000;
    }
    else{
        currentTime = 600000;
    }
    timeC.innerHTML = millisToMinutesAndSeconds(currentTime);
}