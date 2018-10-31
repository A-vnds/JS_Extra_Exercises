/*
In your HTML create an input field, a button with the text "Add" and an empty div under them.

Create a function for every time that I press the Add button, the value of the input
have to be appended in the empty div.
If the input is empty (witouth any text), and the user press the Add button, an alert
should be shown with an advertising text.
*/


document.getElementById("myBtn").addEventListener("click", appendValue);

function appendValue() {
    
    var x = document.getElementById("myBtn").value;
    if (x != ''){
        document.getElementById("push-value").innerHTML = x;
    } else {
        alert('Empty Value Field');
    }
   
}