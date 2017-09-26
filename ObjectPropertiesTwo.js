// Declaring the object
var map = new Object();

// Declaring variable type string
var propertyOne = "propertyOneName";

// Inserting property with a variable type string
map[propertyOne] = "I love computers";

// Inserting properties with dot / replace the original text in the variable
map.propertyTwo = "Inserting property with dot";

// Inserting property like associative arrays
map["propertyThree"] = "Cristina Rojas"; 

// Printing the object before intert
console.log('My object', map);

delete map.propertyOneName;

// Printing the object before delete
console.log('My object', map);
