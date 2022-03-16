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
    
      daysEl.innerHTML=days;
      hoursEl.innerHTML=hours;
      minsEl.innerHTML=mins;
      secondsEl.innerHTML=seconds;
}


countdown();
setInterval(countdown,1000);
