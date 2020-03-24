function Mouse(name){
	this.name=name;
	this.isdead=true;
}
Mouse.prototype.die=function(){
	this.dead=true;
}
module.exports=Mouse;