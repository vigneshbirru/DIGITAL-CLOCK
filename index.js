window.onload = () =>{
    
    function buildclock(){
      
    

    const date = new Date();

    let hours = date.getHours();
    let minute  = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours: hours;
    minute = minute < 10 ? "0" + minute:minute;
    seconds = seconds < 10 ? "0" + seconds:seconds;
    
    document.querySelector('#clock-hours').innerText=hours;
    document.querySelector('#clock-minutes').innerText=minute;
    document.querySelector('#clock-seconds').innerText=seconds;

    setTimeout(buildclock,1000);
    }
    buildclock();
}