var logo = document.getElementById('logo');
var multi = document.getElementById('multi');
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
var p1name = "ibuki";
var p2name = "chunli";
var intervalP1, intervalP2;
var counter = 1;
var p1x = window.innerWidth * 0.05;
var p1y = window.innerHeight * 0.55;
var p2x = window.innerWidth * 0.83;
var p2y = window.innerHeight * 0.55;
var p1movingf = false;
var p2movingf = false;
var p1movingb = false;
var p2movingb = false;
var raf, fpsInterval, then, now, elapsed;
var currentStateP1, currentStateP2;
var stance = { src: [ 'assets\\' + p1name + '\\stance-left-',  'assets\\' + p2name + '\\stance-right-'],
							 frames1: (p1name == "alex") ? 12 : (p1name == "chunli") ? 20 :
							 					(p1name == "ibuki") ? 51 : (p1name == "twelve") ? 14 :
							 					(p1name == "yang") ? 13 : (p1name == "yun") ? 27 : 10,
							 frames2: (p2name == "alex") ? 12 : (p2name == "chunli") ? 20 :
							 					(p2name == "ibuki") ? 51 : (p2name == "twelve") ? 14 :
							 					(p2name == "yang") ? 13 : (p2name == "yun") ? 27 : 10, 
							 images: [[],[]] }
var punch = { src: ['assets\\' + p1name + '\\punch-left-', 'assets\\' + p2name + '\\punch-right-'],
							 frames1: (p1name == "alex") ? 8 : (p1name == "ibuki" || p1name == "yang") ? 11 : 
											  (p1name == "twelve") ? 8 : (p1name == "yun") ? 10 : 5,
							 frames2: (p2name == "alex") ? 8 : (p2name == "ibuki" || p2name == "yang") ? 11 : 
											  (p2name == "twelve") ? 8 : (p2name == "yun") ? 10 : 5, 
							 images: [[],[]] }
var walkingf = { src: ['assets\\' + p1name + '\\forward-left-', 'assets\\' + p2name + '\\forward-right-'],
							 frames1: (p1name == "alex" || p1name == "yang" || p1name == "yung") ? 14 : 
							 					(p1name == "chunli") ? 32 : (p1name == "ibuki") ? 16 : (p1name == "twelve") ? 20 : 11,
							 frames2: (p2name == "alex" || p2name == "yang" || p2name == "yung") ? 14 : 
							 					(p2name == "chunli") ? 32 : (p2name == "ibuki") ? 16 : (p2name == "twelve") ? 20 : 11, 
							 images: [[],[]] }
var walkingb = { src: ['assets\\' + p1name + '\\backward-left-', 'assets\\' + p2name + '\\backward-right-'],
								 frames1: (p1name == "alex" || p1name == "yang" || p1name == "yung") ? 14 : 
							 						(p1name == "chunli") ? 32 : (p1name == "ibuki") ? 16 : (p1name == "twelve") ? 20 : 11,
								 frames2: (p2name == "alex" || p2name == "yang" || p2name == "yung") ? 14 : 
							 						(p2name == "chunli") ? 32 : (p2name == "ibuki") ? 16 : (p2name == "twelve") ? 20 : 11,
								 images: [[],[]] }
var hit = { src: ['assets\\' + p1name + '\\hit-left-', 'assets\\' + p2name + '\\hit-right-'],
						frames1: (p1name == "ibuki") ? 5 : 4,
						frames2: (p2name == "ibuki") ? 5 : 4,
					  images: [[],[]]}

preloadAll();

var menuRotate = setInterval(function() {
	counter++;
	game.style.backgroundImage = "url(assets/" + counter + ".png)";
	switch(counter) {
	  case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
			logo.style.color = "white";
			multi.style.color = "white";
			quit.style.color = "white";
			break;
		default: 
			logo.style.color = "black";
			multi.style.color = "black";
			quit.style.color = "black";
			break;
	}
	if (counter == 10) { counter = 0; }
}, 2000)

function init() {
	fpsInterval = 1000 / 20;
	then = Date.now();
	animate();
}

let j = 0;
let i = 0;
function animate() {
	let p2diff = (currentStateP2 === punch && p2name === "twelve") ? window.innerWidth * 0.15 : (currentStateP2 === punch) ? window.innerWidth * 0.069
	 : (currentStateP2 === walkingf) ? window.innerWidth * 0.04 : (currentStateP2 === hit && p2name !== "twelve") ? window.innerWidth * 0.04 : 0;
	let p1diff = (currentStateP1 === walkingb) ? window.innerWidth * 0.04 : (currentStateP1 === hit) ? window.innerWidth * 0.07 : 0;
	raf = requestAnimationFrame(animate);
	now = Date.now();
	elapsed = now - then;
	if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);
		p1[i] = currentStateP1.images[0][i];
		p2[j] = currentStateP2.images[1][j];
		ctx.clearRect(0, 0, scene.width, scene.height);
		ctx.drawImage(p1[i], this.p1x - p1diff, this.p1y, p1[i].width * 2.5, p1[i].height * 2.5);
		ctx.drawImage(p2[j], this.p2x - p2diff, this.p2y, p2[j].width * 2.5, p2[j].height * 2.5);
		if ((currentStateP1 === punch || currentStateP1 === hit) && i == currentStateP1.frames1 - 1) {
			i = 0;
			currentStateP1 = stance;
		}
		else if (i == currentStateP1.frames1 - 1 && (currentStateP1 !== punch || currentStateP1 !== hit)) {
			i = 0;
		}
		else {
			i++;
		}
		if ((currentStateP2 === punch || currentStateP2 === hit) && j == currentStateP2.frames2 - 1) {
			j = 0;
			currentStateP2 = stance;
		}
		else if (j == currentStateP2.frames2 - 1 && (currentStateP2 !== punch || currentStateP2 !== hit)) {
			j = 0;
		}
		else {
			j++;
		}
		if(p1movingb && p1x > 0) { p1x -= 20; }
		if(p1movingf && p1x < p2x - 200) { p1x += 20; }
		if(p2movingf && p2x > p1x + 200) { p2x -= 20; }
		if(p2movingb && p2x < window.innerWidth * 0.86) { p2x += 20; }
	}
}

multi.onclick = (e) => {
	for (let k = menu.childNodes.length - 1; k >= 0; k--) {
		menu.childNodes[k].className = "hidden";
	}
	clearInterval(menuRotate);
	scene.style.visibility = "visible";
	currentStateP1 = stance;
	currentStateP2 = stance;
	init();
	onkeydown = (e) => {
		if (e.keyCode == 69 && currentStateP1 !== punch && currentStateP1 !== hit) {
			if(p1x + 258 >= p2x) { 
				p2movingb = false;
				p2movingf = false;
				j = 0;
				currentStateP2 = hit;
		  }
			if (p1movingf) { p1movingf = false; }
			if (p1movingb) { p1movingb = false; }
			i = 0;
			currentStateP1 = punch;
		}
		if (e.keyCode == 68 && !p1movingf && !p1movingb && currentStateP1 !== hit) {
			p1movingf = true;
			i = 0;
			currentStateP1 = walkingf;
		}
		if (e.keyCode == 65 && !p1movingb && !p1movingf && currentStateP1 !== hit) {
			p1movingb = true;
			i = 0;
			currentStateP1 = walkingb;
		}
		if (e.keyCode == 13 && currentStateP2 !== punch) {
			if (p2x - 258 <= p1x) { 
				p1movingf = false;
				p1movinb = false;
				i = 0;
				currentStateP1 = hit;
			 }
			if (p2movingb) { p2movingb = false; }
			if (p2movingf) { p2movingf = false; }
			shouldHandleP2 = false;
			j = 0;
			currentStateP2 = punch;
		}
		if (e.keyCode == 37 && !p2movingf && !p2movingb) {
			p2movingf = true;
			j = 0;
			currentStateP2 = walkingf;
		}
		if (e.keyCode == 39 && !p2movingb && !p2movingf) {
			p2movingb = true;
			j = 0;
			currentStateP2 = walkingb;
		}
	}
	onkeyup = (e) => {
		if (e.keyCode == 68) { 
			p1movingf = false; 
			p1movingb = false;
			i = 0; 
			currentStateP1 = stance; 
	  }
		if (e.keyCode == 65) { 
			p1movingb = false; 
			p1movingf = false;
			i = 0;
			currentStateP1 = stance; 
	  }
		if (e.keyCode == 37) { 
			p2movingf = false;  
			j = 0;
			currentStateP2 = stance;
		}
		if (e.keyCode == 39) { 
			p2movingb = false;
			j = 0;
			currentStateP2 = stance;
		}
	}
}

quit.onclick = (e) => {

}

function preloadAll() {
	for (let o = 0; o < punch.frames1; o++) {
		punch.images[0][o] = new Image();
		punch.images[0][o].src = punch.src[0] + o + '.png';
	}
	for (let o = 0; o < punch.frames2; o++) {
		punch.images[1][o] = new Image();
		punch.images[1][o].src = punch.src[1] + o + '.png';
	}
	for (let o = 0; o < stance.frames1; o++) {
		stance.images[0][o] = new Image();
		stance.images[0][o].src = stance.src[0] + o + '.png';
	}
	for (let o = 0; o < stance.frames2; o++) {
		stance.images[1][o] = new Image();
		stance.images[1][o].src = stance.src[1] + o + '.png';
	}
	for (let o = 0; o < walkingf.frames1; o++) {
		walkingf.images[0][o] = new Image();
		walkingf.images[0][o].src = walkingf.src[0] + o + '.png';
	}
	for (let o = 0; o < walkingf.frames2; o++) {
		walkingf.images[1][o] = new Image();
		walkingf.images[1][o].src = walkingf.src[1] + o + '.png';
	}
	for (let o = 0; o < walkingb.frames1; o++) {
		walkingb.images[0][o] = new Image();
		walkingb.images[0][o].src = walkingb.src[0] + o + '.png';
	}
	for (let o = 0; o < walkingb.frames2; o++) {
		walkingb.images[1][o] = new Image();
		walkingb.images[1][o].src = walkingb.src[1] + o + '.png';
	}
	for (let o = 0; o < hit.frames1; o++){
		hit.images[0][o] = new Image();
		hit.images[0][o].src = hit.src[0] + o + '.png';
	}
	for (let o = 0; o < hit.frames2; o++) {
		hit.images[1][o] = new Image();
		hit.images[1][o].src = hit.src[1] + o + '.png';
	}
}