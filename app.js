const secondsHand = document.getElementById("seconds-hand")
const minutesHand = document.getElementById("minutes-hand")
const hoursHand = document.getElementById("hours-hand")

function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6
    secondsHand.style.transform = "rotate(" + (seconds * timeInterval) + "deg)"
    const seconds_angle = seconds * timeInterval
    console.log(seconds_angle)
    minutesHand.style.transform = "rotate(" + (minutes * timeInterval + seconds/10) + "deg)"
    minutes_angle = minutes * timeInterval + seconds/10
    console.log(minutes_angle)
    hoursHand.style.transform = "rotate(" + (hours * 30 + minutes/2) + "deg)"
    hours_angle = hours * 30 + minutes/2 
    console.log(hours_angle)
    console.log("\n\n")
}

setInterval(getTime,100)