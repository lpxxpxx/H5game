var waveObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
	this.rr = [];
	this.speed = [];
	this.style = [];
}
waveObj.prototype.num = 15;
waveObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.r[i] = 0;
		this.rr[i] = 0;
		this.speed[i] = 0;
		this.style[i] = "";
	}
}
waveObj.prototype.draw = function(){
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	for (var i = 0; i < this.num; i++) {
		ctx1.shadowColor = "rgba(" + this.style[i] + ",1)";
		if (this.alive[i]) {
			this.r[i] += deltaTime * this.speed[i];
			if (this.r[i] > this.rr[i]) {
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i] / this.rr[i];
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI * 2);
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(" + this.style[i] + "," + alpha + ")";
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

waveObj.prototype.born = function(x,y){
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 10;
			this.rr[i] = 40;
			this.speed[i] = 0.05;
			this.style[i] = "255,255,255";
			return;
		}
	}
}
waveObj.prototype.bornBaby = function(x,y){
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 10;
			this.rr[i] = 100;
			this.speed[i] = 0.03;
			this.style[i] = "203,91,0";
			return;
		}
	}
}