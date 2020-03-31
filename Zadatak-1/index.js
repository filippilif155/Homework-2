var localStorageList = [];
const form = document.getElementById("addForm");
const newItem = document.createElement("li");

const itemList = document.getElementById("items");
const listSearch = document.getElementById("search-list");
const searchBox = document.getElementById("filter");
searchBox.addEventListener("keyup", arrowsAndEnter);
form.addEventListener("submit", addItem)

itemList.addEventListener("click", removeItem);

listSearch.addEventListener("click", toSearch);

searchBox.addEventListener("focus", () =>{
    listSearch.style.display = "block";
})

searchBox.addEventListener("focusout", () =>{
    let x = setInterval(() => {
    
    listSearch.style.display = "none";
    clearInterval(x);
},200)
})


window.addEventListener("beforeunload", function(e){
    localStorage.setItem("items", localStorageList);
 }, false);

Array.from(localStorage.getItem("items").split(",")).forEach(function(item) {
    console.log(item);
    let items = document.getElementsByClassName("list-group-item");
    localStorageList.push(item);
    let a = item;
    let newItem = document.createElement("li"); 
    newItem.className = "list-group-item";
    const textNode = document.createTextNode(a);
    let b = document.createElement("button");
    b.innerHTML = "X"
    b.className = "btn btn-danger btn-sm float-right delete";
    newItem.appendChild(textNode);
    newItem.appendChild(b);
    items[0].parentNode.appendChild(newItem);
})


let filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItems)

function addItem(event) {
    event.preventDefault();
    let items = document.getElementsByClassName("list-group-item");


    let a = document.getElementById("item").value;
    let newItem = document.createElement("li"); 
    newItem.className = "list-group-item";
    const textNode = document.createTextNode(a);

    let b = document.createElement("button");
    b.innerHTML = "X"
    b.className = "btn btn-danger btn-sm float-right delete";
    newItem.appendChild(textNode);

    newItem.appendChild(b);


    items[0].parentNode.appendChild(newItem);
    localStorageList.push(a);
}

function removeItem(event) {
    if (event.target.classList.contains("delete")) {
        if (confirm("Jeste li sigurni da zelite da uklonite item?")) {
            
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
            for(let i = 0; i < localStorageList.length; i++){
                if(localStorageList[i] === event.target.parentNode.textContent.slice(0, -1)){
                    localStorageList.splice(i, 1);
                }
            }
        }
    }

    event.stopPropagation();
}

 //Dropdown search
function filterItems(e) {
    if(e.which !== 40 && e.which !== 38 && e.which !== 13){
        let text = e.target.value.toLowerCase();
        
        let items = document.getElementsByClassName("list-group-item");
        
        let itemsUl = document.getElementsByClassName("drpdwn-ul");
        
        while (itemsUl[0].firstChild) {
            itemsUl[0].removeChild(itemsUl[0].lastChild);
        }
        let itemsLi = [];
        Array.from(items).forEach(function(item) {
            let itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) !== -1 && text !== "") {
                itemsLi.push(document.createElement("li"));
                itemsLi[itemsLi.length - 1].className = "drpdwn-li";
                itemsLi[itemsLi.length - 1].innerHTML = itemName;
                itemsUl[0].appendChild(itemsLi[itemsLi.length - 1]);
                itemsUl[0].lastChild.addEventListener("click", toSearch);
            } 
        })
        if (itemsUl.length != 0){
            itemsUl[0].style.display = "flex";
        }
        counter = 0;
        elemNum = 0;
    }    


}

function toSearch(e){
        let itemNameSele = e.target.firstChild.textContent;
        let items = document.getElementsByTagName("li");

        Array.from(items).forEach(function(item) {
            let itemName = item.firstChild.textContent;
            if(itemName === itemNameSele) {
                item.style.display = "block";
            } else{
                item.style.display = "none";
            }
        })
        document.getElementById("filter").value = itemNameSele;
        listSearch.style.display = "none";
}

var counter = 0;
var elemNum = 0;
function arrowsAndEnter(e){
    
    let childrenList = listSearch.children;
    if (counter === 0 && listSearch.firstChild !== "undefinded" && (e.which == 40 || e.which == 38)){
        childrenList[elemNum].style.setProperty("background-color", "rgb(151, 150, 150)");
        
        counter++;
    }
    else if(counter > 0 && e.which == 40 && elemNum < childrenList.length - 1) {
        childrenList[elemNum].style.setProperty("background-color", "white");
        childrenList[elemNum].className = "drpdwn-li";
        elemNum++;

        childrenList[elemNum].style.setProperty("background-color", "rgb(151, 150, 150)");
        counter++;

    }
    else if(counter > 0 && e.which == 38 && elemNum >= 1) {
        childrenList[elemNum].style.setProperty("background-color", "white");
        childrenList[elemNum].className = "drpdwn-li";
        elemNum--;
        childrenList[elemNum].style.setProperty("background-color", "rgb(151, 150, 150)");
        counter++;

    }
    else if(e.which == 13 && counter > 0){
        childrenList[elemNum].className = "drpdwn-li";
        let itemNameSele = childrenList[elemNum].firstChild.textContent;
        let items = document.getElementsByTagName("li");
        
        Array.from(items).forEach(function(item) {
            let itemName = item.firstChild.textContent;
            if(itemName === itemNameSele) {
                item.style.display = "block";
            } else{
                item.style.display = "none";
            }
        })
        
    
        document.getElementById("filter").value = itemNameSele;
        listSearch.style.display = "none";
    }
    
}





