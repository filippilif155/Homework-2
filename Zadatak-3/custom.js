
var numOfBoxes = prompt("How many characters do you want to check?");


while(isNaN(parseInt(numOfBoxes))){

    numOfBoxes = prompt("Wrong input! How many characters do you want to check?");
    
}

while(numOfBoxes >= 0){
    addBox();
    numOfBoxes--;
}

const result = document.getElementById("result");

var listToRemove = document.getElementById("container");

listToRemove.addEventListener("click", removeItem);

listToRemove.addEventListener("keyup", Palindrome);

function addBox(){
    let boxesList = document.getElementById("container");
    if(boxesList.lastElementChild !== null){
        
        boxesList.removeChild(boxesList.lastElementChild);

        let newItem = document.createElement("div"); 
        newItem.className = "flex-box";

        let newInput = document.createElement("input"); 
        newInput.setAttribute("type", "text");
        newInput.maxLength = 1;
        newInput.className = "text";

        let newButton = document.createElement("button");
        newButton.className = "btn";
        newButton.innerHTML = "X";

        let newItemPlus = document.createElement("div"); 
        newItemPlus.className = "flex-box plus";

        let newButtonPlus = document.createElement("button");
        newButtonPlus.className = "btn-plus";
        newButtonPlus.setAttribute('onclick','addBox()');
        newButtonPlus.innerHTML = "+";

        newItem.appendChild(newInput);
        newItem.appendChild(newButton);
        
        newItemPlus.appendChild(newButtonPlus);


        boxesList.appendChild(newItem);
        boxesList.appendChild(newItemPlus);

    }   
    else{
        let newItemPlus = document.createElement("div"); 
        newItemPlus.className = "flex-box plus";

        let newButtonPlus = document.createElement("button");
        newButtonPlus.className = "btn-plus";
        newButtonPlus.setAttribute('onclick','addBox()');
        newButtonPlus.innerHTML = "+";
        
        newItemPlus.appendChild(newButtonPlus);

        boxesList.appendChild(newItemPlus);

    }
}

function removeItem(event){

    if (event.target.classList.contains("btn")) {

        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
            
      
    }

}

function isPalindrome(str){
    let test = 0;
    for(let i = 0; i < str.length/2; i++){
        if(str[i] !== str[str.length - i - 1]){
            test = 1;
        }
    }
    if(test){
        return false;
    }
    else{
        return true;
    }
}

function Palindrome(event){
    var RegExpression = /^[a-zA-Z\s]*$/; 
    let str = "";
    
    
    
    if(event.target.value === ""){
        event.target.style.backgroundColor = "white";
        event.target.style.opacity = "0.5";
    }
    else if(!RegExpression.test(event.target.value)){
        event.target.style.backgroundColor = "rgb(210, 109, 109)";
        
        event.target.style.opacity = "1";
        result.style.backgroundColor = "rgb(189, 216, 93)";
        
    }
    else{
        
        event.target.style.opacity = "1";
        let arr = listToRemove.children;
        
        for(let i = 0; i < arr.length; i++){
            if(arr[i].firstElementChild.value !== "" & arr[i].firstElementChild.value !== " "){
                str = str + arr[i].firstElementChild.value;
            }
        }
        if(isPalindrome(str)){
            result.style.backgroundColor = "rgba(36, 173, 36, 0.678)";
        }
        else{
            result.style.backgroundColor = "rgb(189, 216, 93)";
        }

    }
        
    
}
