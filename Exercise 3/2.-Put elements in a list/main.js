/*

I need a function that is able to put elements inside a list in my html.
- First of all you need a list in your HTML. Feel free to create it from HTML or in JS.
- The second thing is to create a function that receives an Array like a parameter.
- For every value of the array you need a different list item in html.

For example:

    myFunction(['color1', 'color2', 'color3']);

*/

function addMyColors(colors) {
    
    for (let i = 0 ;  i < colors.length ; i++ ) {
        
        let x = document.createElement('li');
        let t = document.createTextNode(colors[i]);
        x.appendChild(t);
        document.getElementById('color-list').appendChild(x);
    }
}


let colors = ['Blue', 'Yellow', 'Orange'];

addMyColors(colors);