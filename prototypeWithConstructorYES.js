function map(name, jobtitle, born) {
	this.name = name;
  	this.jobtitle = jobtitle;
  	this.born = born;
}

map.prototype.salary = null;

var criss = new map('Cristina Rojas', 'FrontEnd', 1989);

criss.salary = 1000;

console.log(criss);