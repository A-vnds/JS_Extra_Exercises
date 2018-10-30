//JavaScript Exercises 2

//Exercise 1

//Now let's add content to an HTML document instead of writing to the console.
//Write a function called addBands(myBandList) that will list your favorite bands.
//Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
//and an empty unordered list with ID band-list.
//Your function should use the JavaScript DOM to create list items and add them
//to the unordered list, with one list item for each string in array myBandList.
//For example, if I call:
//  addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
//The function will add three list items to the unordered list.


    
function addMyBands(myBandList) {
    
    for (let i = 0 ;  i < myBandList.length ; i++ ) {
        
        let x = document.createElement('li');
        let t = document.createTextNode(myBandList[i]);
        x.appendChild(t);
        document.getElementById('band-list').appendChild(x);
    }
}


let myBands = ['Foals', 'Wild Beasts', 'The National'];

addMyBands(myBands);



//Exercise 2

//Write a function called addMultTable(rows, cols) that will create a multiplication
//table.Your function should use the JavaScript DOM to insert an HTML table after the heading.
//For example, if I call:
//addMultTable(4, 8);
//It will create an HTML table with 4 rows
//and 8 columns, and append it after the level 1 heading.





function addMultTable(rows, cols){
    
    let table = document.getElementById("myTable");
    
    for (let i = 0 ; i < rows ; i++){
        let row = table.insertRow(i);
        
        for (let j = 0 ; j < cols ; j++){
        let cell1 = row.insertCell(j);
        }
    }
}

addMultTable(7,5);












