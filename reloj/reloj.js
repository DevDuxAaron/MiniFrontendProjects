let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let seconds = document.getElementById("seconds")

let clock = setInterval(() => {
    let date_now = new Date()
    let hr = date_now.getHours()
    let mi = date_now.getMinutes()
    let sec = date_now.getSeconds()

    if (hr < 10)
        hr = "0" + hr
    if(mi < 10)
        mi = "0" + mi
    if(sec < 10)
        sec = "0" + sec

    hour.textContent = hr
    minute.textContent = mi
    seconds.textContent = sec
},1000)