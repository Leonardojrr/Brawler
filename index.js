var brawlers = new Array()
var p1_selected_brawler = 0
var p2_selected_brawler = 0
var p1_image = document.querySelector("#img_p1")
var p2_image = document.querySelector("#img_p2")
var p1_gif = document.querySelector("#P1gif")
var p2_gif = document.querySelector("#P2gif")
var p1_name = document.querySelector("#FP")
var p2_name = document.querySelector("#SP")
var section = document.querySelector("#section")
var startGame = document.querySelector(".start")
var back = document.querySelector(".back")
var url_gif = ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"]
var url_chapter_select = [["assets\\gifs\\ryu1.gif","assets\\gifs\\ryu2.gif"],["assets\\gifs\\ken1.gif","assets\\gifs\\ken2.gif"],["assets\\gifs\\chun-li1.gif","assets\\gifs\\chun-li2.gif"],["assets\\gifs\\alex1.gif","assets\\gifs\\alex2.gif"],["assets\\gifs\\sean1.gif","assets\\gifs\\sean2.gif"],["assets\\gifs\\yun1.gif","assets\\gifs\\yun2.gif"],["assets\\gifs\\yang1.gif","assets\\gifs\\yang2.gif"],["assets\\gifs\\ibuki1.gif","assets\\gifs\\ibuki2.gif"],["assets\\gifs\\twelve1.gif","assets\\gifs\\twelve2.gif"],["assets\\gifs\\akuma1.gif","assets\\gifs\\akuma2.gif"]]

// funciones para colocar el gif del brawler seleccionado
function gif1(s){
    brawlers[s].gif.src= url_gif[0]
    brawlers[s].gif.style.visibility = "visible"
    p1_image.src = brawlers[s].url_foto[0]
    p1_name.innerHTML = brawlers[s].name
}
function gif2(s){
    brawlers[s].gif.src= url_gif[1]
    brawlers[s].gif.style.visibility = "visible"
    p2_image.src = brawlers[s].url_foto[1]
    p2_name.innerHTML = brawlers[s].name
}
function gif3(s){
    brawlers[s].gif.src = url_gif[2]
    brawlers[s].gif.style.visibility = "visible"
    p1_image.src = brawlers[s].url_foto[0]
    p2_image.src = brawlers[s].url_foto[1]
    p1_name.innerHTML = brawlers[s].name
    p2_name.innerHTML = brawlers[s].name
}

// funcion para saber que jugador esta seleccionando a cual brawler
function brawlerSelected(s1,s2){
    if(s1==s2){
        gif3(s1)
    }
    else{
        gif1(s1)
        gif2(s2)
    }
}
// Lista de los Brawlers
brawlers[0] = {
    name:"RYU",
    url_icon: "assets\\icons\\ryu.gif",
    url_foto: ["assets\\photos\\ryu1.gif","assets\\photos\\ryu2.gif"],
    icon: document.querySelector("#B1icon"),
    gif: document.querySelector("#B1gif"),
    id: "ryu"
}
brawlers[1] = {
    name:"KEN",
    url_icon: "assets\\icons\\ken.gif",
    url_foto: ["assets\\photos\\ken1.gif","assets\\photos\\ken2.gif"],
    icon: document.querySelector("#B2icon"),
    gif: document.querySelector("#B2gif"),
    id: "ken"
}
brawlers[2] = {
    name:"CHUN-LI",
    url_foto: ["assets\\photos\\chun-li1.gif","assets\\photos\\chun-li2.gif"],
    gif: document.querySelector("#B3gif"),
    id: "chunli"
}
brawlers[3] = {
    name:"ALEX",
    url_icon: "asset\\icons\\guiles",
    url_foto: ["assets\\photos\\alex1.gif","assets\\photos\\alex2.gif"],
    gif: document.querySelector("#B4gif"),
    id: "alex"
}
brawlers[4] = {
    name:"SEAN",
    url_icon: "asset\\icons\\chun-li",
    url_foto: ["assets\\photos\\sean1.gif","assets\\photos\\sean2.gif"],
    gif: document.querySelector("#B5gif"),
    id: "sean"
}
brawlers[5] = {
    name:"YUN",
    url_icon: "asset\\icons\\ken",
    url_foto: ["assets\\photos\\yun1.gif","assets\\photos\\yun2.gif"],
    gif: document.querySelector("#B6gif"),
    id: "yun"
}
brawlers[6] = {
    name:"YANG",
    url_icon: "asset\\icons\\guiles",
    url_foto: ["assets\\photos\\yang1.gif","assets\\photos\\yang2.gif"],
    gif: document.querySelector("#B7gif"),
    id: "yang"
}
brawlers[7] = {
    name:"IBUKI",
    url_icon: "asset\\icons\\chun-li",
    url_foto: ["assets\\photos\\ibuki1.gif","assets\\photos\\ibuki2.gif"],
    gif: document.querySelector("#B8gif"),
    id: "ibuki"
}
brawlers[8] = {
    name:"TWELVE",
    url_icon: "asset\\icons\\chun-li",
    url_foto: ["assets\\photos\\twelve1.gif","assets\\photos\\twelve2.gif"],
    gif: document.querySelector("#B9gif"),
    id: "twelve"
}
brawlers[9] = {
    name:"AKUMA",
    url_icon: "asset\\icons\\chun-li",
    url_foto: ["assets\\photos\\akuma1.gif","assets\\photos\\akuma2.gif"],
    gif: document.querySelector("#B10gif"),
    id: "akuma"
}

brawlerSelected(0,0)

//Movimientos para seleccionar personajes 

onkeydown = e => {
    // Derecha P1 y P2

    // P1
    if(e.keyCode == 68){
        brawlers[p1_selected_brawler].gif.style.visibility = "hidden"
        if(p1_selected_brawler == 2){
            p1_selected_brawler = 0
        }
        else if(p1_selected_brawler == 5){
            p1_selected_brawler = 3
        }
        else if(p1_selected_brawler == 8){
            p1_selected_brawler = 6
        }
        else if(p1_selected_brawler == 9){
            p1_selected_brawler = 8
        }
        else{p1_selected_brawler++}
        brawlers[p1_selected_brawler].gif.style.visibility="visible"
        brawlerSelected(p1_selected_brawler,p2_selected_brawler)
        p1_gif.src = url_chapter_select[p1_selected_brawler][0]
    }
    //P2
    else if(e.keyCode == 39){
        brawlers[p2_selected_brawler].gif.style.visibility = "hidden"
        if(p2_selected_brawler == 2){
            p2_selected_brawler = 0
        }
        else if(p2_selected_brawler == 5){
            p2_selected_brawler = 3
        }
        else if(p2_selected_brawler == 8){
            p2_selected_brawler = 6
        }
        else if(p2_selected_brawler == 9){
            p2_selected_brawler = 8
        }
        else{p2_selected_brawler++}
        brawlers[p2_selected_brawler].gif.style.visibility="visible"
        brawlerSelected(p1_selected_brawler,p2_selected_brawler)
        p2_gif.src = url_chapter_select[p2_selected_brawler][1]
    }

    //Izquierda

    //P1
    else if(e.keyCode==65){
            brawlers[p1_selected_brawler].gif.style.visibility = "hidden"
            if(p1_selected_brawler == 0){
                p1_selected_brawler = 2
            }
            else if(p1_selected_brawler == 3){
                p1_selected_brawler = 5
            }
            else if(p1_selected_brawler == 6){
                p1_selected_brawler = 8
            }
            else if(p1_selected_brawler == 9){
                p1_selected_brawler = 6
            }
            else{p1_selected_brawler--}
            brawlers[p1_selected_brawler].gif.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
            p1_gif.src = url_chapter_select[p1_selected_brawler][0]
        }
    //P2
    else if(e.keyCode==37){
            brawlers[p2_selected_brawler].gif.style.visibility = "hidden"
            if(p2_selected_brawler == 0){
                p2_selected_brawler = 2
            }
            else if(p2_selected_brawler == 3){
                p2_selected_brawler = 5
            }
            else if(p2_selected_brawler == 6){
                p2_selected_brawler = 8
            }
            else if(p2_selected_brawler == 9){
                p2_selected_brawler = 6
            }
            else{p2_selected_brawler--}
            brawlers[p2_selected_brawler].gif.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
            p2_gif.src = url_chapter_select[p2_selected_brawler][1]
    }

    //Arriba

    //P1
    else if(e.keyCode == 87){
            brawlers[p1_selected_brawler].gif.style.visibility = "hidden"
            if(p1_selected_brawler == 0){
                p1_selected_brawler = 6
            }
            else if(p1_selected_brawler == 1){
                p1_selected_brawler = 9
            }
            else if(p1_selected_brawler == 2){
                p1_selected_brawler = 8
            }
            else if(p1_selected_brawler == 9){
                p1_selected_brawler -=2
            }
            else{p1_selected_brawler -=3}
            brawlers[p1_selected_brawler].gif.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
            p1_gif.src = url_chapter_select[p1_selected_brawler][0]
    }
    //P2
    else if(e.keyCode == 38){
            brawlers[p2_selected_brawler].gif.style.visibility = "hidden"
            if(p2_selected_brawler == 0){
                p2_selected_brawler = 6
            }
            else if(p2_selected_brawler == 1){
                p2_selected_brawler = 9
            }
            else if(p2_selected_brawler == 2){
                p2_selected_brawler = 8
            }
            else if(p2_selected_brawler == 9){
                p2_selected_brawler -=2
            }
            else{p2_selected_brawler -=3}
            brawlers[p2_selected_brawler].gif.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
            p2_gif.src = url_chapter_select[p2_selected_brawler][1]
    }

    //Abajo

    //P1
    else if(e.keyCode == 83){
            brawlers[p1_selected_brawler].gif.style.visibility = "hidden"
            if(p1_selected_brawler == 6){
                p1_selected_brawler = 0
            }
            else if(p1_selected_brawler == 9){
                p1_selected_brawler = 1
            }
            else if(p1_selected_brawler == 8){
                p1_selected_brawler = 2
            }
            else if(p1_selected_brawler == 7){
                p1_selected_brawler = 9
            }
            else{p1_selected_brawler +=3}
            brawlers[p1_selected_brawler].gif.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
            p1_gif.src = url_chapter_select[p1_selected_brawler][0]
    }
    //P2
    else  if(e.keyCode == 40){
            brawlers[p2_selected_brawler].gif.style.visibility = "hidden"
            if(p2_selected_brawler == 6){
                p2_selected_brawler = 0
            }
            else if(p2_selected_brawler == 9){
                p2_selected_brawler = 1
            }
            else if(p2_selected_brawler == 8){
                p2_selected_brawler = 2
            }
            else if(p2_selected_brawler == 7){
                p2_selected_brawler = 9
            }
            else{p2_selected_brawler +=3}
            brawlers[p2_selected_brawler].gif.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
            p2_gif.src = url_chapter_select[p2_selected_brawler][1]
    }
}

// END OF SELECT, START OF GAME ITSELF

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
var currentStateP1, currentStateP2, stance, punch, hit, walkingf, walkingb, p1name, p2name;

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
	menu.className = "hiddenBlock";
	section.className = "section shownFlex"
}

back.onclick = (e) => {
	menu.className = "shownBlock";
	section.className = "section hiddenFlex";
}

startGame.onclick = (e) => {
	p1name = brawlers[p1_selected_brawler].id;
	p2name = brawlers[p2_selected_brawler].id;
	stance = { src: [ 'assets\\' + p1name + '\\stance-left-',  'assets\\' + p2name + '\\stance-right-'],
							 frames1: (p1name == "alex") ? 12 : (p1name == "chunli") ? 20 :
							 					(p1name == "ibuki") ? 51 : (p1name == "twelve") ? 14 :
							 					(p1name == "yang") ? 13 : (p1name == "yun") ? 27 : 10,
							 frames2: (p2name == "alex") ? 12 : (p2name == "chunli") ? 20 :
							 					(p2name == "ibuki") ? 51 : (p2name == "twelve") ? 14 :
							 					(p2name == "yang") ? 13 : (p2name == "yun") ? 27 : 10, 
							 images: [[],[]] }
	punch = { src: ['assets\\' + p1name + '\\punch-left-', 'assets\\' + p2name + '\\punch-right-'],
								 frames1: (p1name == "alex") ? 8 : (p1name == "ibuki" || p1name == "yang") ? 11 : 
												  (p1name == "twelve") ? 8 : (p1name == "yun") ? 10 : 5,
								 frames2: (p2name == "alex") ? 8 : (p2name == "ibuki" || p2name == "yang") ? 11 : 
												  (p2name == "twelve") ? 8 : (p2name == "yun") ? 10 : 5, 
								 images: [[],[]] }
	walkingf = { src: ['assets\\' + p1name + '\\forward-left-', 'assets\\' + p2name + '\\forward-right-'],
								 frames1: (p1name == "alex" || p1name == "yang" || p1name == "yung") ? 14 : 
								 					(p1name == "chunli") ? 32 : (p1name == "ibuki") ? 16 : (p1name == "twelve") ? 20 : 11,
								 frames2: (p2name == "alex" || p2name == "yang" || p2name == "yung") ? 14 : 
								 					(p2name == "chunli") ? 32 : (p2name == "ibuki") ? 16 : (p2name == "twelve") ? 20 : 11, 
								 images: [[],[]] }
	walkingb = { src: ['assets\\' + p1name + '\\backward-left-', 'assets\\' + p2name + '\\backward-right-'],
									 frames1: (p1name == "alex" || p1name == "yang" || p1name == "yung") ? 14 : 
								 						(p1name == "chunli") ? 32 : (p1name == "ibuki") ? 16 : (p1name == "twelve") ? 20 : 11,
									 frames2: (p2name == "alex" || p2name == "yang" || p2name == "yung") ? 14 : 
								 						(p2name == "chunli") ? 32 : (p2name == "ibuki") ? 16 : (p2name == "twelve") ? 20 : 11,
									 images: [[],[]] }
	hit = { src: ['assets\\' + p1name + '\\hit-left-', 'assets\\' + p2name + '\\hit-right-'],
							frames1: (p1name == "ibuki") ? 5 : 4,
							frames2: (p2name == "ibuki") ? 5 : 4,
						  images: [[],[]]}
  preloadAll();
	section.className = "section hiddenFlex";
	clearInterval(menuRotate);
	scene.className = "shownBlock"
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