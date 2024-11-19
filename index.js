const secondHand=document.getElementById('second-hand');
const minuteHand=document.getElementById('minute-hand');
const hourHand=document.getElementById('hour-hand');

function clockTick(){
    const date=new Date();
    const seconds=date.getSeconds() /60;
    const minutes=(seconds + date.getMinutes()) /60;
    const hours=(minutes + date.getHours())/12;

    rotateClockHand(secondHand,seconds);
    rotateClockHand(minuteHand,minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate', rotation * 360);
}
setInterval (clockTick,1000);

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12 || 12; 
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  
    document.getElementById("time").textContent = formattedTime;
  }
  
  function pad(num) {
    return num.toString().padStart(2, "0");
  }
  

  setInterval(updateClock, 1000);
  updateClock();
  