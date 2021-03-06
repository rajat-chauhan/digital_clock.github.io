function clock(){

    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let am = document.getElementById("rtc-ub-text2");

    let time = new Date();
    // a = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });

    // let h = time.getHours();
    let h = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    // h = h < 10 ? "0" + h : h;
    // To display "0" as "12"
    h = h ? h : "12";
    let m = time.getMinutes();
    let s = time.getSeconds();
    //FOR AM-PM CONVERSION ACCORDING TO TIME
    let am_pm = time.getHours() >= 12 ? am.innerHTML = "PM" : am.innerHTML = "AM";

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;

}
setInterval(clock, 100);

let setTime = document.getElementById("left-bottom-container");
setTime.addEventListener('click', setTimeFun);

function setTimeFun(){
    let wakeup = document.getElementById("wakeUpTimeSelector").value;
    let lunch = document.getElementById("lunchTimeSelector").value;
    let nap = document.getElementById("napTimeSelector").value;
    let hour = new Date().getHours();
    if(wakeup == hour){
        document.getElementById("right-bottom-img-container").style.backgroundImage = "url(./images/wakeup.png)";
        document.getElementById("right-bottom-text-container").innerHTML = "Wake up and be awesome today !!";
    }
    else if(lunch == hour){
        document.getElementById("right-bottom-img-container").style.backgroundImage = "url(./images/lunchImage.png)";
        document.getElementById("right-bottom-text-container").innerHTML = "Let's have lunch !!";
    }
    else if(nap == hour){
        document.getElementById("right-bottom-img-container").style.backgroundImage = "url(./images/nap.png)";
        document.getElementById("right-bottom-text-container").innerHTML = "Things can wait take a nap !!";
    }
}

// setTime.addEventListener('click', Makediv, {once:true});  // "once" is used so that "click" works only once
setTime.addEventListener('click', Makediv);

let container = document.createElement("div");
container.id = "dynamic-block";
container.className = "grid-item";
document.getElementById("left-main-grid-container").appendChild(container);
container.textContent = "Waiting For User to set wake up, lunch & nap time..."

function Makediv(){
    
    let wakeUpValue = document.getElementById("wakeUpTimeSelector");
    let value1 = wakeUpValue.options[wakeUpValue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML = "Wake up Time: "+ value1 + "<br>";

    let lunchValue = document.getElementById("lunchTimeSelector");
    let value2 = lunchValue.options[lunchValue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML += "Lunch Time: "+ value2 + "<br>";

    let napValue = document.getElementById("napTimeSelector");
    let value3 = napValue.options[napValue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML += "Nap Time: "+ value3;

    // setTime.removeEventListener('click', Makediv); //by using this "click" works only once

}

