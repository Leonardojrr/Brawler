var logo = document.getElementById('logo');
var single = document.getElementById('single');
var multi = document.getElementById('multi');
var	settings = document.getElementById('settings');
var quit = document.getElementById('quit');

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
}

quit.onclick = (e) => {
	show(multi);
	show(settings);
	show(logo);
	show(single);
}