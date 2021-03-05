var clock=document.querySelector('.clock');
var dateTag=document.querySelector('.date');


function changeTime(){
    const date=new Date()
    clock.innerHTML=`<span>${date.getHours()>9?date.getHours():'0'+date.getHours()} <span>:
                     <span>${date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes()}</span> : 
                     <span>${date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds()}</span>`;

    dateTag.innerHTML=`<span>${date.getDate()>9?date.getDate():'0'+date.getDate()} <span>/ 
                       <span>${date.getMonth()>9?date.getMonth():'0'+date.getMonth()}</span> / 
                       <span>${date.getFullYear()}</span>`;
}
changeTime()

var obj=setInterval(changeTime,1000);

function stopClock(){
    clearInterval(obj);
}


function startClock(){
    obj=setInterval(changeTime,1000);
}
