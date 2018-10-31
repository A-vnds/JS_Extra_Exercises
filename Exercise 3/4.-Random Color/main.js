/* 
Ok this is the last one!

I need a button that every time is clicked, adds a new row in a table.
But I need that adds a new row with a random color background.

It's sounds hard but remember to think in little.

*/




function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Socrates";
    
       
}
    
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.querySelector('tr').style.background = bgColor;
    }


