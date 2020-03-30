const table = document.getElementsByTagName("table")[0];
const line = document.getElementsByTagName("input")[0];
line.value = "0";
var mathFunc = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
    "x": function (x, y) { return y }
}


table.addEventListener("click", calculate);

function solveInput(){

    let str = line.value;
    let result;
    let arr =  [""];
    let j = 0;
    let t = 0;
    if(!isNaN(str[0])){
        for(let i = 0; i < str.length; i++){
            if(str[i] === "+" || str[i] === "-" || str[i] === "/" || str[i] === "*"){
                j++;
                arr[j] = str[i];
                j++;
                arr[j] = "";
            }
            else{
                arr[j] += str[i];
            }
        }
   
    }
    else{
        t = 1;
    }

    for(let i = 0; i < arr.length; i+=2){
        if(isNaN(arr[i])){
            t = 1;
        }
        arr[i] = parseFloat(arr[i]);
    }
    if(t === 1){
        line.value = err;
    }
    else{
        for(let i = 1; i < arr.length; i+=2){
            if(arr[i] === "*"){
                arr.splice(i - 1, 3, arr[i - 1] * arr[i + 1]);
                console.log(arr[i])
            }
        }

        for(let i = 1; i < arr.length; i+=2){
            if(arr[i] === "/"){
                arr.splice(i - 1, 3, arr[i - 1] / arr[i + 1]);
                console.log(arr[i])
            }
        }

        for(let i = 1; i < arr.length; i+=2){
            if(arr[i] === "+"){
                arr.splice(i - 1, 3, arr[i - 1] + arr[i + 1]);
                console.log(arr[i])
            }
        }

        for(let i = 1; i < arr.length; i+=2){
            if(arr[i] === "-"){
                arr.splice(i - 1, 3, arr[i - 1] - arr[i + 1]);
                console.log(arr[i])
            }
        }

        if(arr.length === 1 && !isNaN(arr[0])){
            line.value = arr[0].toString();
        }
        else{
            console.log(arr[0]);
            line.value = err;
        }

    }




    console.log(arr);
    


}

var opCount = 0;
var firstNumber = 0;
const err = "ERROR";
var operator = "x";

function calculate(event){
    let errInner = 0;
    let valueInput = line.value;
    let newValue = event.target.innerHTML;
    if(opCount === 1){
        line.value = "0";
        opCount = 0;

    }
    if(valueInput === "ERROR"){
        line.value = "0";
        valueInput = "";
        firstNumber = 0;
    }
    if(event.target.tagName === "TABLE"){
        newValue = "";
    }
    else if(event.target.tagName === "INPUT"){
        //pass
    }
    else if(newValue === "C"){
        line.value = "0";
        valueInput = "";
        newValue = "";
        firstNumber = 0
    }
    else if(valueInput.slice(-1) === "." && isNaN(newValue)){
        errInner = 1;
    }
    else if(newValue === "." && valueInput.includes(".")){
        errInner = 1;
    }
    else if(isNaN(newValue) && newValue !== "=" && newValue !== "."){
        if(operator !== "x"){
            let x = operator;
            operator = newValue;
            if(valueInput !== ""){
                newValue = mathFunc[x](firstNumber,parseFloat(valueInput)).toFixed(6).toString();            
                line.value = "";
                firstNumber = parseFloat(newValue);
                opCount = 1;
            }
            else{
                newValue = "";
            }
        }
        else{
            operator = newValue;
            firstNumber = parseFloat(valueInput);
            newValue = "";
            line.value = "";
        }
           
    }
    else if(newValue === "="){
        if(valueInput !== ""){
            newValue = mathFunc[operator](firstNumber,parseFloat(valueInput)).toFixed(6).toString();            
            line.value = "";
            firstNumber = parseFloat(newValue);
            operator = "x";
        }
        else{
            newValue = "";
        }
    }
    else if(line.value.length === 1 && line.value[0] === "0" && newValue !== "."){
        line.value = "";
    }


    if(errInner === 1){
        line.value = err;
    }
    else{
        line.value = line.value + newValue;
    }
}
