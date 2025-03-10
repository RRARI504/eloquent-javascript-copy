////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let output = [];
  if(step === undefined){
    step = 1;
  }

  if(start === end){
    return [];
  }

  if(step > 0){
    for(let i = start; i <= end; i += step){
      output.push(i)

    }

  }else{
    for(let i = start; i >= end; i += step){
      output.push(i)

    }
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {

  if(array.length === 0 ){
    return 0;

  }
  
  return array.reduce(function(acc, current){

    return acc + current

  }, 0)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {


  return array.reduce(function(acc, current){
    acc.unshift(current)

    return acc;

  }, []);//start w/ empty array as accumulator 
 

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//I: array 
//O: an array of numbers reversed
function reverseArrayInPlace(array) {

  let reverse = [];
  for(let i = array.length - 1; i >= 0; i--){ 
    //loop through the array starting from the end to the beginning

    reverse.push(array[i]) //push the current iteration to the reverse array

  }

  for(let i = 0; i < array.length; i++){ //modify the orginal array by setting
    //it equal to the the reversed iteration
    array[i] = reverse[i]

  }

  

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  for(let i = array.length - 1; i >= 0; i--){
    //so array[i] will give the values of the array moving backwards
    rest = {value: array[i], rest: rest}; //reassigning rest to an object
                            //here a key on the value of rest is being assigned to rest 
                            //which at the first iteration is null 
  }
  return rest

}
//how this works

//invoke the function ([10, 20, 30])
//rest = null
//for loop that starts at end
//i = 2 
//rest = {value: 30, rest: null  }//value is equal to current item in the array 
//i = 1
//rest = {value: 20, rest: {value: 30, rest: null  }  }
//i = 0 
//rest = {value: 10, rest: {value: 20, rest: } value: 30, rest null } } }


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
  //since we are trying to return a complex piece of data, must make a default parameter
  //this creates the value in the recursion which will eventually be the data being retured

  //base
  if(list.rest === null){
    array.push(list.value)

    return array; //when the base case is hit it just needs to return the array 
  }


  //recursion
array.push(list.value)

return listToArray(list.rest, array)

}

//invoke listToArray(list1)
//the first thing to happen is the base case is going to be hit BASE//false becasue we are not close to the solution
//then we hit the RECURSION need to grab the value of 10 from the input and put it into the array
//so, array.push(10)
//then it returns the object at the rest property - listToArray()
//BASE //FALSE
//hits the RECURSION again
//so, array.push(20)//the next layer of the list 
//return listToArray() at the second rest 


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//creates a new list that adds the element to the front of the input list
function prepend(element, list) {


  return {value: element, rest: list}
  //element is placed in the front of the array 
  //this will return a new object with a value property set to the element 
  //and a rest property set to the current list

}



////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
if(list === null){
  return undefined

}else if(number === 0) {
  return list.value 

}else{
  return nth(list.rest, number - 1)
}


}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {

  if(typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  }

  if(typeof x !== 'object' || typeof y !== 'object'){
    return false;

  }
  let xKeys = Object.keys(x)
  let yKeys = Object.keys(y)

  if(xKeys.length !== yKeys.length){
    return false;

  }

  for(let i = 0; i < xKeys.length; i++ ){
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
      return false;

    }

  }
  return true;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};