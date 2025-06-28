const clock = document.getElementById('clock')


function updateClock() {
    const now = new Date()

    let hours = now.getHours()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    // let milliSeconds = now.getMilliseconds()

    hours = hours<10 ? '0'+hours : hours;
    minutes = minutes<10 ? '0'+minutes : minutes;
    seconds = seconds<10 ? '0'+seconds : seconds;
    // milliSeconds = milliSeconds<10 ? '0'+milliSeconds : milliSeconds;

    const timeString = `${hours}:${minutes}:${seconds}`

    clock.textContent=timeString
}

document.addEventListener('DOMContentLoaded', ()=>{
    updateClock();
    setInterval(updateClock, 100);
})