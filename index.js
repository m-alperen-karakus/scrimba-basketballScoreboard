let homeText = document.getElementById("home")
let home = 0
let guestText = document.getElementById("guest")
let guest = 0
let periodText = document.getElementById("period")
let period = 0
let foulsText = document.getElementById("fouls")
let foulsHome = 0
let foulsGuest = 0

function addScore(name, point) {
    if(name == "home") {home += point; homeText.textContent = home }
    else if(name == "guest") {guest += point; guestText.textContent = guest }
    else if ( name =="period") 
    {
        if (period < 4) { period += point; periodText.textContent = period}
        else { period = 1; periodText.textContent = period}
    }
    else if(name == "foulsHome") {foulsHome += point; foulsText.textContent = foulsHome + "/" + foulsGuest }
    else if(name == "foulsGuest") {foulsGuest += point; foulsText.textContent = foulsHome + "/" + foulsGuest }
    else { console.log("wrong name" + name)}
}


function newGame(){
     home = 0; guest = 0; period = 0 ;foulsHome = 0 ;foulsGuest = 0
     homeText.textContent = home
     periodText.textContent = period
     foulsText.textContent = foulsHome + "/" + foulsGuest
}



