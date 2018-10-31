var x = document.getElementById("myDIV1");
var y = document.getElementById("myDIV2");
var z = document.getElementById("myDIV3");

x.addEventListener("click", myFunction);
y.addEventListener("click", myFunction);
z.addEventListener("click", myFunction);


function myFunction() {
    var allDivs = document.getElementsByClassName("color");
    for (let i =0; i< allDivs.length; i++) {
        allDivs[i].style.display = "block";
    }
    
    let div = this.previousElementSibling;
    
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    } 

}

