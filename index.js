var logo = document.getElementById('logo');
var single = document.getElementById('single');
var multi = document.getElementById('multi');
var	settings = document.getElementById('settings');
var quit = document.getElementById('quit');
var game = document.getElementById('game');
var menu = document.getElementById('menu');
var scene = document.getElementById('scene');
scene.style.visibility = 'hidden';
var ctx = scene.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var p1 = new Array();
var p2 = new Array();
var intervalP1, intervalP2;
var counter = 1;
var isP1stance = true;
var isP2stance = true;
var p1x = window.innerWidth * 0.05;
var p1y = window.innerHeight * 0.55;
var p2x = window.innerWidth * 0.83;
var p2y = window.innerHeight * 0.55;
var raf, fpsInterval, then, now, elapsed;
var currentStateP1, currentStateP2;
var stance = { src: [ 'assets\\ryu\\stance-left-',  'assets\\ryu\\stance-right-'],
							 frames: 10 }
var punch = { src: ['assets\\ryu\\punch-left-', 'assets\\ryu\\punch-right-'],
							 frames: 5 }

var menuRotate = setInterval(function() {
	counter++;
	game.style.backgroundImage = "url(assets/" + counter + ".png)";
	if (counter == 2 || counter == 3 || counter == 4 || counter == 6 || counter == 7 || 
		counter == 8 || counter == 9 || counter == 11) {
		logo.style.color = "white";
		single.style.color = "white";
		multi.style.color = "white";
		settings.style.color = "white";
		quit.style.color = "white";
	}
	else {
		logo.style.color = "black";
		single.style.color = "black";
		multi.style.color = "black";
		settings.style.color = "black";
		quit.style.color = "black";
	}
	if (counter == 11) { counter = 0; }
}, 2000)

function update() {
	cancelAnimationFrame(raf);
	fpsInterval = 1000 / 20;
	then = Date.now();
	animate(null, currentStateP1.src[0], currentStateP1.frames, currentStateP2.src[1], currentStateP2.frames);
}

let j = 0;
let i = 0;
function animate(timestamp, src1, frames1, src2, frames2) {
	raf = requestAnimationFrame( function() { animate(timestamp, src1, frames1, src2, frames2) });
	now = Date.now();
	elapsed = now - then;
	if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);
		p1[i] = new Image();
		p2[j] = new Image();
		p1[i].src = src1 + i + '.png';
		p2[j].src = src2 + j + '.png';
		ctx.clearRect(0, 0, scene.width, scene.height);
		ctx.drawImage(p1[i], this.p1x, this.p1y, parseInt(p1[i].width * 2.5), parseInt(p1[i].height * 2.5));
		ctx.drawImage(p2[j], this.p2x, this.p2y, parseInt(p2[j].width * 2.5), parseInt(p2[j].height * 2.5));
		if (!isP1stance && ++i == frames1) {
			i = 0;
			cancelAnimationFrame(raf);
			isP1stance = true;
			currentStateP1 = stance;
			update();
		}
		else if (i == frames1 - 1 && isP1stance) {
			i = 0;
		}
		else {
			i++;
		}
		if (!isP2stance && ++j == frames2) {
			j = 0;
			cancelAnimationFrame(raf);
			isP2stance = true;
			currentStateP2 = punch;
			update();
		}
		else if (j == frames2 - 1 && isP2stance) {
			j = 0;
		}
		else {
			j++;
		}
	}
}

function refresh() {
	 ctx.clearRect(0, 0, scene.width, scene.height); 
	 requestAnimationFrame(refresh);
}


single.onclick = (e) => {
	for (let k = menu.childNodes.length - 1; k >= 0; k--) {
		menu.childNodes[k].className = "hidden";
	}
	clearInterval(menuRotate);
	scene.style.visibility = "visible";
	currentStateP1 = stance;
	currentStateP2 = stance;
	update();
	var shouldHandle = true;
	onkeydown = (e) => {
		if (shouldHandle && e.keyCode == 69) {
			isP1stance = false;
			shouldHandle = false;
			i = 0;
			currentStateP1 = punch;
			update();
			setTimeout(function() { shouldHandle = true }, 275);
		}
	}
}

quit.onclick = (e) => {

}