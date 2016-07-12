var fruitObj = function(){
	this.alive = [];//bool
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = [];
	this.l = [];
	this.aneID = [];
	this.spd = [];
	this.fruitType = [];
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.aneID[i] = 0;
		this.spd[i] = Math.random() * 0.01 + 0.01;
		this.fruitType[i] = "";
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function(){
	for (var i = 0; i < this.num; i++) {
		var pic;
		if (this.fruitType[i] == "orange") {
			pic = this.orange;
		}else{
			pic = this.blue;
		}
		if (this.alive[i]) {
			if (this.l[i] <= 16) {
				this.x[i] = ane.headx[this.aneID[i]];
				this.y[i] = ane.heady[this.aneID[i]];
				this.l[i] += this.spd[i] * deltaTime;
			}else{
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if (this.y[i] < 10) {
				this.alive[i] = false;
			}
		}
	}   
}
fruitObj.prototype.born = function(i){
	this.aneID[i] = Math.floor(Math.random() * ane.num);
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if (ran < 0.2) {
		this.fruitType[i] = "blue";
	}else{
		this.fruitType[i] = "orange";
	}
}
function aliveFruit(){
	var num = 0;
	for (var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]){num++};
	}
	if (num<15) {
		sentFruit();
		return;
	}
}
	
function sentFruit(){
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		}
	}
}

fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}