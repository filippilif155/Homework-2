
const cellList = document.getElementsByClassName("cell");

const line = document.getElementById("line");

const xWinner = document.getElementById("x-won");

const oWinner = document.getElementById("o-won");

Array.from(cellList).forEach((item) => {
    
    item.addEventListener("click", fillTable)

})

function checkTable(simb){
    if(cellList[0].innerHTML === simb && cellList[1].innerHTML === simb && cellList[2].innerHTML === simb){
        line.className = "line-row1";
        addPoint(simb);
    }
    else if(cellList[3].innerHTML === simb && cellList[4].innerHTML === simb && cellList[5].innerHTML === simb){
        line.className = "line-row2";
        addPoint(simb);
    }
    else if(cellList[6].innerHTML === simb && cellList[7].innerHTML === simb && cellList[8].innerHTML === simb){
        line.className = "line-row3";
        addPoint(simb);
    }
    else if(cellList[0].innerHTML === simb && cellList[3].innerHTML === simb && cellList[6].innerHTML === simb){
        line.className = "line-col1";
        addPoint(simb);
    }
    else if(cellList[1].innerHTML === simb && cellList[4].innerHTML === simb && cellList[7].innerHTML === simb){
        line.className = "line-col2";
        addPoint(simb);
    }
    else if(cellList[2].innerHTML === simb && cellList[5].innerHTML === simb && cellList[8].innerHTML === simb){
        line.className = "line-col3";
        addPoint(simb);
    }
    else if(cellList[0].innerHTML === simb && cellList[4].innerHTML === simb && cellList[8].innerHTML === simb){
        line.className = "line-diag-l";
        addPoint(simb);
    }
    else if(cellList[2].innerHTML === simb && cellList[4].innerHTML === simb && cellList[6].innerHTML === simb){
        line.className = "line-diag-r";
        addPoint(simb);
    }
    else if(counter === 9){
        clearTable();
    }



}

function addPoint(simb){
    if(simb === "X"){
        document.getElementById("result-x").innerHTML = "X - " + ++xResult;
        xWinner.className = "win";
    }
    else{
        document.getElementById("result-o").innerHTML = "O - " + ++oResult;
        oWinner.className = "win";
    }
}

var counter = 0;
var xResult = 0;
var oResult = 0;

function fillTable(event){
    var simb;
    let filled = 0;
    if(event.target.innerHTML !== ""){
        filled = 1;
    }
    else if(counter%2 === 0 && filled === 0){
        event.target.innerHTML = "X";
        simb = "X";
        counter++;
    }
    else if (filled === 0){
        event.target.innerHTML = "O";
        simb = "O";
        counter++;
    }
    
    checkTable(simb);

}

function clearTable(){

    Array.from(cellList).forEach((item) => {
    
        item.innerHTML = "";
    
    })
    counter = 0;
    line.className = "hide";
    xWinner.className = "hide";
    oWinner.className = "hide";
}

function clearTableAndScore(){
    clearTable();
    xResult = 0;
    oResult = 0;
    document.getElementById("result-x").innerHTML = "X - " + xResult;
    document.getElementById("result-o").innerHTML = "O - " + oResult;
}