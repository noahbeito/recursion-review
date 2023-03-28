// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Input: target class name
// Output: Array of elements with that class name
// Constraints: n/a
// Edge Cases: n/a
var getElementsByClassName = function(className, element
) {
  // your code here
  // Create an array
  var results = [];
  var currentElement;
  // Get the entire document and assign to variable
  element ? currentElement = element : currentElement = document.body;
  // Check element if it has class
  if (currentElement.classList && currentElement.classList.contains(className)) {
    results.push(currentElement);
  }
  if (currentElement.childNodes) {
    var childnode = currentElement.childNodes;
    for (var i = 0; i < childnode.length; i++) {
      var currentNode = childnode[i];
      results = results.concat(getElementsByClassName(className, currentNode));
    }
  }
  return results;
  // If element has more elements within, use recursion to check if they have class name
};
