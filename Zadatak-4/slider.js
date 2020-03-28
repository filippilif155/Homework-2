const imagesList = ["images/pic-6.jpg", "images/pic-2.jpg", "images/pic-3.jpg", "images/pic-4.jpeg", "images/pic-5.jpg", "images/pic-1.jpg"];

const leftArrow = document.getElementById("arrow-l");
const rightArrow = document.getElementById("arrow-r");
var pic = document.getElementById("pic");
const cont = document.getElementById("cont");


leftArrow.addEventListener("click", slideImage);
rightArrow.addEventListener("click", slideImage);
cont.addEventListener("mouseover", slideImage2)
cont.addEventListener("mouseout",function(){
    document.removeEventListener("keydown", slideImage3, false); 
});

pic.addEventListener("click", zoomImage);

var counter = 0;
function slideImage(event){
    if(event.target){
        if(counter === 0){
            counter = 6;
        }
        counter--;
        cont.removeChild(pic);

        pic = document.createElement("img");
        if(zoomZounter%2 === 0){
            pic.className = "main-pic";
        }
        else{
            
            pic.className = "main-pic main-pic-zoom";
        }
        pic.src = imagesList[counter];
        
        cont.appendChild(pic);
        pic.addEventListener("click", zoomImage);
    }
    else{
        if(counter === 0){
            counter = -1;
        }
        counter++;
        cont.removeChild(pic);

        pic = document.createElement("img");
        if(zoomZounter%2 === 0){
            pic.className = "main-pic";
        }
        else{
            
            pic.className = "main-pic main-pic-zoom";
        }
        pic.src = imagesList[counter];
        
        cont.appendChild(pic);
        pic.addEventListener("click", zoomImage);
    }



}

function slideImage2(event){
    
    document.addEventListener("keydown", slideImage3);
}




function slideImage3(event){

    if(event.which === 37){
        if(counter === 0){
            counter = 6;
        }
        counter--;
        cont.removeChild(pic);

        pic = document.createElement("img");
        if(zoomZounter%2 === 0){
            pic.className = "main-pic";
        }
        else{
            
            pic.className = "main-pic main-pic-zoom";
        }
        pic.src = imagesList[counter];
        
        cont.appendChild(pic);
        pic.addEventListener("click", zoomImage);
    }
    else if( event.which === 39){
        if(counter === 5){
            counter = -1;
        }
        counter++;
        cont.removeChild(pic);

        pic = document.createElement("img");
        if(zoomZounter%2 === 0){
            pic.className = "main-pic";
        }
        else{
            
            pic.className = "main-pic main-pic-zoom";
        }
        pic.src = imagesList[counter];
        
        cont.appendChild(pic);
        pic.addEventListener("click", zoomImage);
    }


}
var zoomZounter = 0;
function zoomImage(event){
    if(zoomZounter%2 === 0){
        pic.className = "main-pic main-pic-zoom";
        leftArrow.className = "arrows arrow-back-zoom";
        rightArrow.className = "arrows arrow-next-zoom";

        zoomZounter++;
    }
    else{
        pic.className = "main-pic";
        leftArrow.className = "arrows arrow-back";
        rightArrow.className = "arrows arrow-next";

        zoomZounter++;
    }
}