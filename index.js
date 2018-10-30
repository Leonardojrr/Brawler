var logo = document.getElementById('logo');
var single = document.getElementById('single');
var multi = document.getElementById('multi');
var	settings = document.getElementById('settings');
var quit = document.getElementById('quit');
var game = document.getElementById('game');
var menu = document.getElementById('menu');
var scene = document.getElementById('scene');
scene.style.visibility = 'hidden';
var ryu = new Array();

var counter = 1;

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

single.onclick = (e) => {
	for (var i = menu.childNodes.length - 1; i >= 0; i--) {
		menu.childNodes[i].className = "hidden";
	}
	clearInterval(menuRotate);
	var ctx = scene.getContext('2d');
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	scene.style.visibility = "visible";
	var i = 0;
	setInterval( function() {
		ryu[i] = new Image();
		ryu[i].src = 'D:\\Dev\\wip\\brawler\\Brawler\\assets\\ryu\\stance-right-' + i + '.png'
		ctx.clearRect(0, 0, scene.width, scene.height);
		ctx.drawImage(ryu[i], 1300, 400, parseInt(ryu[i].width * 2.5), parseInt(ryu[i].height * 2.5));
		if (i == 9) {
			i = 0;
		}
		else {
			i++;
		}
	}, 55);
}

quit.onclick = (e) => {

}