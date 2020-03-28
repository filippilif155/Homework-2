// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	num += 2;  
	return num;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));


// Challenge 2
function addS(word) {
  let x = word + "s"
  return x;

}

// uncomment these to check your work
//console.log(addS('pizza'));
//console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let x = [];
  for(let i = 0; i < array.length; i++){
    x.push(callback(array[i]));
  }
  return x;

}

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for(let i = 0; i < array.length; i++){
    callback(array[i]);
  }
}
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
//console.log(alphabet); 
// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  var x = [];
  forEach(array, function(elem) {
  x.push(callback(elem));
});
  return x;
}
//console.log(mapWith([1, 2, 3], addTwo));
//Extension 2
function reduce(array, callback, initialValue) {
  for(let i = 0; i < array.length; i++){
  	initialValue = callback(array[i], initialValue);
  }
  return initialValue;
}
const nums = [4, 1, 3, 10];
const add = function(a, b) { return a + b; }
//console.log(reduce(nums, add, 0));
//Extension 3
function intersection(...arrays) {
  return reduce(arrays, function(a, b){
    let x = [];
    for(let i = 0; i < a.length; i++){
      if(b.includes(a[i])){x.push(a[i]);}
    }
    return x;
  } ,arrays[0]);

}

//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  let p = [];
	return reduce(arrays, function(a, b){
    let x = [];
    for(let i = 0; i < a.length; i++){
      
      if(!p.includes(a[i])){p.push(a[i]);}
    }
    return p;
  } , p);

}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let obj = {};
  for(let i = 0; i < array1.length; i++){
    if(array2[i] === callback(array1[i])){
      obj[array1[i]] = array2[i];
    }
  }
	return obj;
}

//console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	let obj = {};
  for(let i = 0; i < arrVals.length; i++){
    let x = [];
    for(let j = 0; j < arrCallbacks.length; j++){
      x.push(arrCallbacks[j](arrVals[i]));
    }
    obj[arrVals[i]] = x;
  }
	return obj;
}

//console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
  let obj2 = {};
  let t = Object.keys(obj);
  for(let i = 0; i < t.length; i++){
    if(callback(t[i]) === obj[t[i]]){
      obj2[t[i]] = obj[t[i]];
    }
  }
	return obj2;
}

 const cities = {
 London: 'LONDON',
 LA: 'Los Angeles',
 Paris: 'PARIS',
 };
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

