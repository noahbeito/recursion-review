// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// I: obj
// O: string version of obj
// C:
// E:

// declare array variable
// declare result string

// base case:
// current value is not array or obj
// return str


// recursive
// if obj or array
// Push key/value or array[i] into result array


// array.join(',')
// return joined array


var stringifyJSON = function(obj) {
  var resultArray = [];
  var resultStr = '';

  if (obj === undefined) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'function') {
    return 'null';
  }

  if (Array.isArray(obj)) {
    _.each(obj, function(item) {
      resultArray = resultArray.concat(stringifyJSON(item));
    });
  }

  if (typeof obj === 'object') {
    _.each(obj, function(key, value) {

      resultArray.push(key.toString() + ':' + stringifyJSON(value));
    });
  }
  console.log('resultArray: ', resultArray);
  resultStr = resultArray.join(',');
  return resultStr;

};