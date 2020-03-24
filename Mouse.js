function Mouse(name){
	this.name=name;
	this.isdead=false;
}
Mouse.prototype.die=function(){
	this.dead=true;
}
module.exports=Mouse;