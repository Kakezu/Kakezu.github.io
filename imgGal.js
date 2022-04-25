var pics = ['lanparty1.jpg', 'lanparty2.jpg', 'lanparty3.jpg', 'lanparty4.jpg'];
function nxtImg() {    
    var img = document.getElementById("slideimage");    
    var imgName = img.name.split("_");    
    var index = imgName[1];    
    if (index == pics.length-1) {    
       index = 0;    
    }   
    else {    
       index++;    
    }    
    img.src = pics[index];    
    img.name = "image_" + index;    
 }   
 function prvImg() {    
    var img = document.getElementById("slideimage");    
    var imgName = img.name.split("_");    
    var index = imgName[1];    
    if (index == 0) {    
        index = pics.length - 1;    
    }   
    else {    
         index--;    
    }    
    img.src = pics[index];    
    img.name = "image_" + index;    
 }   