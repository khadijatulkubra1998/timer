let x = new Date();
let y = x.getTime();
let total = y + (4*24*3600000);

function count() {
    let now = new Date();
    let currentTime = now.getTime();

    let diff = total - currentTime;
    let s = Math.floor(diff/1000);
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    let d = Math.floor(h/24);

    h =h%24;
    m =m%60;
    s =s%60;

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;
    d = (d<10)?"0"+d:d;

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    setTimeout(count, 1000);
}

count();