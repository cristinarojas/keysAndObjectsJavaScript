var person = new Object();

var criss = new person("Cristina Rojas", "FrontEnd", 1989);

// I can't because person is not a contructor
person.prototype.salary = null;

criss.salary = 20000;

console.log(criss);