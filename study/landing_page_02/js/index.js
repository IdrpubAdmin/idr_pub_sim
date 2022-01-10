var time = 899,
    min = "" ,
    sec = "" ,
    timer = setInterval(function(){
        min = parseInt(time/60);
        sec = time%60     
        time--;
        document.querySelector("#min").innerHTML = min;
        document.querySelector("#sec").innerHTML = sec;

        if(time < 0){
            clearInterval(timer);
        }
    }, 1000);