const a = prompt("Tell me which month").toLowerCase;

switch (true){
    case (a == "December" || a == "January" || a == "February") :
         alert("The season is : Winter");
         break;

    case (a == "March" || a == "April" || a == "May") :
        alert("The season is : Spring");
        break;

    case (a == "June" || a == "July" || a == "August") :
        alert("The season is : Summer");
        break;

    case (a == "September" || a == "October" || a == "November") :
        alert("The season is : Fall");
        break;

    default: alert("invalid");
}

