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

