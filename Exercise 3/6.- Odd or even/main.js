/* Create a function to fill an array with 100 random numbers. You can't create it manually.

After this, make another function that separate the numbers of the first array in two new arrays:
    var oddNumbers = [];
    var evenNumbers = [];

You have to console.log these two arrays after create them. */

/*function randomArray(length) {

}

function splitArray(){


}
*/


function randomDataSet(dataSetSize, minValue, maxValue) {
    return new Array(dataSetSize).fill(0).map(function(n) {
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
    });
}




function splitArray(data){
    let arrOdd = [];
    let arrEven = [];
    
        for (let i = 0 ; i < data.length ; i++) {
         if ( data[i] % 2 === 0) {
            arrEven.push(data[i]);
         } else {
            arrOdd.push(data[i]);
        }
    }
    console.log(data);
    console.log(arrOdd);
    console.log(arrEven);
}


splitArray(randomDataSet(100,1,250));
