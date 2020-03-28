// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
	return function(){
    console.log("hello");
  }
}

// /*** Uncomment these to check your work! ***/
//const function1 = createFunction();
//function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
	return function(){
    console.log(input);
  }
}

// /*** Uncomment these to check your work! ***/
//const printSample = createFunctionPrinter('sample');
//printSample(); // => should console.log('sample');
//const printHello = createFunctionPrinter('hello');
//printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
	return function(y){
    return y + x
  }
}

// /*** Uncomment these to check your work! ***/
//const addByTwo = addByX(2);
//addByTwo(1); // => should return 3
//addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5
//console.log(addByTwo(1));
//console.log(addByTwo(2));
//const addByThree = addByX(3);
//console.log(addByThree(1)); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function addByTwo(x){
  return x + 2;
}

function once(func) {
  let counter = 0;
  let onceVal;
  //--------------------------------------!
  const innerFunc = val => {
    if (counter === 0) onceVal = func(val);
    counter++;
    return onceVal;
  }
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
//console.log(onceFunc(4));  // => should log 6
//console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  return function(val){
    if (++counter >= count) func(val);
  }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
//afterCalled(); // => nothing is printed
//afterCalled(); // => nothing is printed
//afterCalled(); // => 'hello' is printed
//afterCalled();

// CHALLENGE 6
function delay(func, wait) {
	setTimeout(() => func(), wait);
}
function cLogA(){
  console.log("A");
}
//console.log("Wait...")
//delay(cLogA, 2000);

// CHALLENGE 7
function rollCall(names) {
    return () => {
    if (!names.length) return console.log('Everyone accounted for');
    console.log(names.shift());
  }
   }

// /*** Uncomment these to check your work! ***/
//const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
//rollCaller() // => should log 'Victoria'
//rollCaller() // => should log 'Juan'
//rollCaller() // => should log 'Ruth'
//rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
	let obj = {};
  return val => {
    if(typeof val === 'number'){
      obj[val] = func(val);
      return func(val);
    }
    else{
      return obj;
    }
  }
}

// /*** Uncomment these to check your work! ***/
//const multiplyBy2 = function(num) { return num * 2; };
//const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
//console.log(multBy2AndLog(2)); // => should log 4
//console.log(multBy2AndLog(9)); // => should log 18
//console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  let iterator = 0;
  return () => {
    if(iterator >= array.length) iterator = 0;
    return array[iterator++];
  }

}

// /*** Uncomment these to check your work! ***/
/*
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
*/

// CHALLENGE 10
function defineFirstArg(func, arg) {
	return (val) => {
    if(typeof val === 'object') return func(arg, ...val);
    return func(arg, val)
  }
}

// /*** Uncomment these to check your work! ***/
/*
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15
*/

// CHALLENGE 11
function dateStamp(func) {
	let obj = {};
  return (...args) => {
    obj["date"] = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    obj["output"] = func(args);
    return obj
  }
}

// /*** Uncomment these to check your work! ***/
/*
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
*/

// CHALLENGE 12
function censor() {
	let obj = {};
  return (valOne, valTwo = "") => {
    if(valTwo != "") obj[valOne] = valTwo;
    else if (valTwo === ""){
      for(const prop in obj){
        valOne = valOne.replace(prop, obj[prop]);
      }
      return valOne;
    }
  }
}
// /*** Uncomment these to check your work! ***/
/*
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
*/

// CHALLENGE 13
function createSecretHolder(secret) {

  let obj = {
  value: secret,
  getSecret: function() {
    return this.value;
  },
  setSecret: function(val) {
    this.value = val;
  }
}
  return obj;
}

// /*** Uncomment these to check your work! ***/
/*
let obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2
*/

// CHALLENGE 14
function turnToString(callback) {
 return() => String(callback());
}

function return50() {
  return 50;
}

// /*** Uncomment these to check your work! ***/
/*
let myNewFunc = turnToString(return50);
console.log(myNewFunc()); // => returns ’50’
*/

// CHALLENGE 15
function callTimes() {
	let iterator = 1;
  return () => iterator++;
}

// /*** Uncomment these to check your work! ***/
/*
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2
*/

// CHALLENGE 16
function russianRoulette(num) {
	let iterator = 0;
  return () => {
    if (++iterator < num) return "click";
    else if(iterator === num){
      return "bang";
    }
    else return "reload to play again";
  }
}

// /*** Uncomment these to check your work! ***/
/*
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'
*/

// CHALLENGE 17
function average() {
	let lista = [];
  let elem = 0;
  
  return (val = 0) =>{
    if(val !== 0){ 
    lista.push(val);
    elem++;
    }
    if(lista.length !== 0) return lista.reduce((previous, current) => current += previous)/lista.length;
    else return 0;
  }
}

// /*** Uncomment these to check your work! ***/
/*
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8
*/

// CHALLENGE 18
function makeFuncTester(arrOfTests) {
  return (func) => {
    let tac = true;
    for(let i = 0; i < arrOfTests.length; i++){
      if(func(arrOfTests[i][0]) !== arrOfTests[i][1]) {
        tac = false;
        break
      }
    }
    
    if (tac) return true;
    return false;
      
  }
}

// /*** Uncomment these to check your work! ***/
/*
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
*/

// CHALLENGE 19
function makeHistory(limit) {
  let lista = [];
	return val => {
    if (val === "undo"){
      if(lista.length === 0) return "nothing to undo";
      else return lista.pop() + " " + "undone";
    }
  
  else if(lista.length === limit){
    lista[limit] = val;
    return val + " " + "done";
  }
  else{
    lista.push(val);
    return val + " " + "done";
    }
}
}
// /*** Uncomment these to check your work! ***/
/*
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'
*/

// CHALLENGE 20
function blackjack(array) {
	var position = 0;
  return (val1, val2) => {
    let sum = val1 + val2;
    let count = 0;
    return () => {
      if(count === 0){
        count++;
        return sum;
      }
      if(count === 1 && sum+array[position] <= 21){
        sum+=array[position++];
        return sum;
      }
      else if(++count === 2){ position++; return "bust"; }
      else return "you are done!";
    }
  }
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
/*
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
*/
// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
/*
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15 error!! skips 7 blackjack[3] fix --- delete position++ ond line 418 
console.log(i_TOO_like_to_live_dangerously()); // => should log 19 
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
*/
// /*** PLAYER 3 ***/
/*
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13 same as comment from line 444
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
*/