// define function on window load or refresh 
window.addEventListener('load', ()=>{
    timer();
})

// refresh values in every 1 sec 
setInterval('timer()', 1000);

// main timer function 
function timer(){
    let time = Date.parse("july 21, 2023 01:30:00");
    let currentDate = new Date();
    let difference = time -  currentDate ;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours = Math.floor(difference / (1000 * 60 * 60)),
        mins = Math.floor(difference / (1000 * 60)),
        secs = Math.floor(difference / 1000);

    let d = days,
        h = hours - days * 24,
        m = mins - hours * 60,
        s = secs - mins * 60;

    document.querySelector(".days").innerHTML=d;
    document.querySelector(".hours").innerHTML=h;
    document.querySelector(".mins").innerHTML=m;
    document.querySelector(".seconds").innerHTML=s;
}