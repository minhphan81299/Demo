var chalk =require('chalk');

function Dog(name) {
	// body...
	this.name=name;
	this.stomach=[];
}
Dog.prototype.eat = function(cat) {
	// body...3
	this.stomach.push(cat);
};

Dog.prototype.sayhi = function() {
	// body...3
	console.log('hi i am a dog'+ chalk.red(this.name));

};

module.exports = Dog;