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
var i = 0;
var j = 0;
var isP1stance = true;

var menuRotate = setInterval(function() {
	counter++;
	console.log(counter);
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

function animateP2(p2x, p2y, src, frames) {
	j = 0;
	clearInterval(intervalP2);
	intervalP2 = setInterval( function() {
		p2[j] = new Image();
		p2[j].src = src + j + '.png';
		ctx.clearRect(p2x, p2y, (p2x + p2[j].width * 2.5), (p2y + p2[j].height * 2.5));
		ctx.drawImage(p2[j], p2x, p2y, parseInt(p2[j].width * 2.5), parseInt(p2[j].height * 2.5));
		if (j == frames - 1) {
			j = 0;
		}
		else {
			j++;
		}
	}, 55);
}

function animateP1(p1x, p1y, src, frames) {
		i = 0;
		clearInterval(intervalP1);
		intervalP1 = setInterval( function() {
			p1[i] = new Image();
			p1[i].src = src + i + '.png';
			ctx.clearRect(p1x, p1y, (p1x + p1[i].width * 2.5), (p1y + p1[i].height * 2.5));
			ctx.drawImage(p1[i], p1x, p1y, parseInt(p1[i].width * 2.5), parseInt(p1[i].height * 2.5));
			if (i == frames - 1 && isP1stance) {
				i = 0;
			}
			else if (!isP1stance && ++i === frames) {
				console.log('woo');
				isP1stance = true;
				clearInterval(intervalP1);
				animateP1(p1x, p1y, 'D:\\Dev\\wip\\brawler\\Brawler\\assets\\ryu\\stance-left-', 10);
			}
			else {
				i++;
			}
		}, 55);	
}

single.onclick = (e) => {
	for (var i = menu.childNodes.length - 1; i >= 0; i--) {
		menu.childNodes[i].className = "hidden";
	}
	clearInterval(menuRotate);
	scene.style.visibility = "visible";
	animateP1(70, 400, 'D:\\Dev\\wip\\brawler\\Brawler\\assets\\ryu\\stance-left-', 10);
	animateP2(1300, 400, 'D:\\Dev\\wip\\brawler\\Brawler\\assets\\ryu\\stance-right-', 10);
	var shouldHandle = true;
	onkeydown = (e) => {
		if (shouldHandle) {
			var key = e.keyCode || e.which;
			if (key == 69) {
				isP1stance = false;
				shouldHandle = false;
				animateP1(70, 400, 'D:\\Dev\\wip\\brawler\\Brawler\\assets\\ryu\\punch-left-', 5);
				setTimeout(function() { shouldHandle = true }, 270);
			}
		}
	}
}

quit.onclick = (e) => {

}