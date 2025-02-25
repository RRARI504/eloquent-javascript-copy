// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
return array.reduce(function(acc, current){
  return acc.concat(current)

}, [])

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  for(let currentValue = value; test(currentValue); currentValue = update(currentValue)){
    //make a regular loop iteration, value = starting value of loop,
    //test takes (currentValue) as an argument and returns true or false whether the loop should continue
    //update takes the current value and returns a new one. Calculates new value for the iteration
    body(currentValue)

  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for(let i = 0; i < array.length; i++){//loop through each element in the array 
    if(!test(array[i], i, array)){//if test returns false for any element return false immediately 
      return false;

    }

  }
  return true;//if no false found return true 

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(test) {

  // Find the script that corresponds to the code point
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (code >= script.range[0] && code <= script.range[1]) {
      return script;
    }
  }
  return null; // Return null for undefined characters
}

function dominantDirection(text) {
  // Count the characters by direction
  var directions = countBy(text, function(char) {
    var script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(function(entry) {
    return entry.name !== "none";
  });

  var total = directions.reduce(function(n, entry) {
    return n + entry.count;
  }, 0);

  if (total === 0) {
    return "No directions found";
  }

  // Find the direction with the highest count
  return directions.reduce(function(dominant, current) {
    return current.count > dominant.count ? current : dominant;
  }).name;



}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};