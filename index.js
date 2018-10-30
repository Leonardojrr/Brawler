var logo = document.getElementById('logo');
var single = document.getElementById('single');
var multi = document.getElementById('multi');
var	settings = document.getElementById('settings');
var quit = document.getElementById('quit');
var game = document.getElementById('game');

var counter = 1;

setInterval(function() {
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
}, 5000)

function hide(o) {
	o.className = "hidden";
	setTimeout(function() {
    o.style.visibility = "hidden";
	}, 500);
}

function show(o) {
	o.style.visibility = "visible"
	o.className = "shown";
}

single.onclick = (e) => {
	hide(multi);
	hide(settings);
	hide(logo);
	hide(single);
	console.log(game);
	game.className = "fight";
}

quit.onclick = (e) => {
	show(multi);
	show(settings);
	show(logo);
	show(single);
}