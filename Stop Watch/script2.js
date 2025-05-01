var t, ms, s, mn, h, startBtn, stopBtn, resetBtn, sp, inside,section;

window.onload = function (){
    sp = document.getElementsByTagName('span')
    startBtn = document.getElementById('start')
    stopBtn = document.getElementById('stop')
    inside  = document.querySelector('.inside')
    t;
    ms = 0; s = 0; mn = 0; h = 0;
}
function updateChrono(){
    ms += 1;
    if(ms === 10){
        ms = 1;
        s += 1
    }
    if (s === 60){
        s = 1;
        mn += 1
    }
    if ( mn === 60){
        mn = 1;
        h += 1
    }


    sp[0].style.color = '<white'
    sp[1].style.color = '<white'
    sp[2].style.color = '<white'
    sp[3].style.color = '<white'
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'mn';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 's';
}
function start(){
    t = setInterval(updateChrono,100)
    startBtn.disabled = true;
}
function stop(){
    clearInterval(t)
    startBtn.disabled = false;
}
 function reset(){
     clearInterval(t)
     startBtn.disabled = false;
     ms = 0; s = 0; mn = 0; h = 0;

     sp[0].innerHTML = h + 'h';
     sp[1].innerHTML = mn + 'min';
     sp[2].innerHTML = s + 's';
     sp[3].innerHTML = ms + 'ms';
 }
