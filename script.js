
var dt = new Date();

dt.setDate(1);
var day = dt.getDay()

var endDate = new Date(dt.getFullYear(),dt.getMonth() + 1,0 ).getDate();
var prevDate = new Date(dt.getFullYear(),dt.getMonth() ,0 ).getDate();

var today = new Date().getDate(); 


var cells = "";

for(x = day; x>0; x--){
    cells+= "<div>" + "." + "</div>";
}

for(i = 1; i<=endDate; i++) {
   if (i == today) {
    cells+= "<div class='today'>" + i + "</div>";
   } else {
    cells+= "<div>" + i + "</div>";
   }
}

document.getElementsByClassName("days")[0].innerHTML = cells;


const monthNames = [ "January" , "Febuary", "March", "April", "May" , "June" , "july",
 "August","September","October","November","December"]

 const d = new Date();
document.getElementById("lvmonth").innerHTML = monthNames[d.getMonth()]



var x = document.getElementById("lvyear").innerHTML = d.getFullYear();




