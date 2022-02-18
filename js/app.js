 var day = document.getElementById("day");

 for (var i = 1; i <= 31; i++) {
   var option = document.createElement("option");
   var optionText = document.createTextNode(i);

   option.appendChild(optionText);
   day.appendChild(option);
 }

var month = document.getElementById("month");

 for (var i = 1; i <= 12; i++) {
   var option = document.createElement("option");
   var optionText = document.createTextNode(i);

   option.appendChild(optionText);
   month.appendChild(option);
 }

var year = document.getElementById("year");

 for (var i = 2022; i >= 1950; i--) {
   var option = document.createElement("option");
   var optionText = document.createTextNode(i);

   option.appendChild(optionText);
   year.appendChild(option);
 }
