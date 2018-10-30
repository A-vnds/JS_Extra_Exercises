
var newArray = ["images/baseball.jpg","images/cross.jpg","images/cycling.jpg","images/icehockey.jpg","images/mix.jpg", "images/soccer.jpg", "images/tennis.jpg", "images/tennistable.jpg"]


document.getElementById('my-button').addEventListener('click', displayImage);


function displayImage(){
    let num = Math.floor(Math.random() * (newArray.length)); // 0...8 index
    document.getElementById('myPicture').src = newArray[num];
}

































/* 


function display_random_image() 
{
     var theImages = [{
        src: 'images/baseball.jpg',
        width: "500",
        height: "343"
    }, {
        src: 'images/cross.jpg',
        width: "500",
        height: "343"
    }, {
        src: 'images/cycling.jpg',
        width: "500",
        height: "343"
    }, {
        src: 'images/football.jpg',
        width: "500",
        height: "343"
    }, {
        src: 'images/icehockey.jpg',
        width: "500",
        height: "343"
    },{
        src: 'images/mix.jpg',
        width: "500",
        height: "343"
    },{
        src: 'images/soccer.jpg',
        width: "500",
        height: "343"
    },{
        src: 'images/tennis.jpg',
        width: "500",
        height: "343"
    },{
        src: 'images/tennistable.jpg',
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}

*/