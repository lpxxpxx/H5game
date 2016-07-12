var can1;
var can2;

var ctx1;
var ctx2;

var bgPic = new Image();

var wid;
var hei;

var ane;

var fruit;

var deltaTime;
var lastTime;

var mom;
var baby;

var mx;
var my;

var data;

var wave;

var dust;

document.body.onload = game;
function game(){
	init();
	gameloop();
}

function init(){
	//获得canvas context
	can1 = document.getElementById('canvas1');
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById('canvas2');
	ctx2 = can2.getContext("2d");

	can1.addEventListener('mousemove',onMouseMove,false);

	lastTime = Date.now();

	bgPic.src = "./src/background.jpg"

	wid = can1.width;
	hei = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	data = new dataObj();

	wave = new waveObj();
	wave.init();

	dust = new dustObj();
	dust.init();

	mx = wid * 0.5;
	my = hei * 0.5;

	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if (deltaTime > 40) {deltaTime = 40}

	drawBackground();
	ane.draw();
	aliveFruit();
	fruit.draw();

	ctx1.clearRect(0,0,wid,hei);
	mom.draw();
	baby.draw();
	momCollision();
	babyCollision();
	data.draw();
	wave.draw();
	dust.draw();
}

function onMouseMove(e){
	if (!data.gameOver) {
		if(e.offSetX || e.layerX){
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}
	}
}