const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minsEl =document.getElementById('mins');
const secondsEl =document.getElementById('seconds');
const newYears="2023 1 1";
function countdown(){
    const newYearDate=new Date(newYears);
    const currentDate=new Date();
    const Totalseconds=(newYearDate-currentDate)/1000;
    const days=Math.floor(Totalseconds/3600/24);
    const hours=Math.floor(Totalseconds/3600)%24;
    const mins=Math.floor(Totalseconds/60)%60;
    const seconds=Math.floor(Totalseconds%60);
    
      daysEl.innerHTML=format(days);
      hoursEl.innerHTML=format(hours);
      minsEl.innerHTML=format(mins);
      secondsEl.innerHTML=format(seconds);
}
function format(time)
{
  return time<10? (`0${time}`) : time;
}


countdown();
setInterval(countdown,1000);
