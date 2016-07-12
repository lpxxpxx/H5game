var dustObj = function(){
	this.x = [];
	this.y = [];
	this.amp = [];
	this.NO = [];
	this.pic = [];
	this.alpha = 0;
}
dustObj.prototype.num = 30;
dustObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.x[i] = Math.random() * wid;
		this.y[i] = Math.random() * hei;
		this.amp[i] = Math.random() * 15 + 20;
		this.NO[i] = Math.floor(Math.random() * 7);
	}
	for (var i = 0; i < 7; i++) {
		this.pic[i] = new Image();
		this.pic[i].src = "./src/dust" + i + ".png";
	}
}
dustObj.prototype.draw = function(){
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);
	for (var i = 0; i < this.num; i++) {
		ctx1.drawImage(this.pic[this.NO[i]],this.x[i] + this.amp[i] * l,this.y[i]);
	}
}