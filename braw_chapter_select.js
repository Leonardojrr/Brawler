var brawlers = new Array()
var p1_selected_brawler = 0
var p2_selected_brawler = 0
var p1_image = document.querySelector("#img_p1")
var p2_image = document.querySelector("#img_p2")

// funciones para colocar el gif del brawler seleccionado
function gif1(s){
    brawlers[s].gif.src= brawlers[s].url_gif[0]
    brawlers[s].gif.style.visibility = "visible"
    p1_image.src = brawlers[s].url_foto[0]
}
function gif2(s){
    brawlers[s].gif.src= brawlers[s].url_gif[1]
    brawlers[s].gif.style.visibility = "visible"
    p2_image.src = brawlers[s].url_foto[1]
}
function gif3(s){
    brawlers[s].gif.src = brawlers[s].url_gif[2]
    brawlers[s].gif.style.visibility = "visible"
    p1_image.src = brawlers[s].url_foto[0]
    p2_image.src = brawlers[s].url_foto[1]
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
    name:"Ryu",
    url_foto: ["assets\\photos\\ryu1.gif","assets\\photos\\ryu2.gif"],
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B1gif")
}
brawlers[1] = {
    name:"Ken",
    url_foto: ["assets\\photos\\ken1.gif","assets\\photos\\ken2.gif"],
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B2gif")
}
brawlers[2] = {
    name:"Chun-Li",
    url_foto: ["assets\\photos\\chun-li1.gif","assets\\photos\\chun-li2.gif"],
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B3gif")
}
brawlers[3] = {
    name:"Guiles",
    url_icon: "asset\\icons\\guiles",
    url_foto: "assets\\photos\\guiles",
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B4gif")
}
brawlers[4] = {
    name:"Chun-Li",
    url_icon: "asset\\icons\\chun-li",
    url_foto: "assets\\photos\\chun-li",
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B5gif")
}
brawlers[5] = {
    name:"Ken",
    url_icon: "asset\\icons\\ken",
    url_foto: "assets\\photos\\ken",
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B6gif")
}
brawlers[6] = {
    name:"Guiles",
    url_icon: "asset\\icons\\guiles",
    url_foto: "assets\\photos\\guiles",
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B7gif")
}
brawlers[7] = {
    name:"Chun-Li",
    url_icon: "asset\\icons\\chun-li",
    url_foto: "assets\\photos\\chun-li",
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B8gif")
}
brawlers[8] = {
    name:"Chun-Li",
    url_icon: "asset\\icons\\chun-li",
    url_foto: "assets\\photos\\chun-li",
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B9gif")
}
brawlers[9] = {
    name:"Chun-Li",
    url_icon: "asset\\icons\\chun-li",
    url_foto: "assets\\photos\\chun-li",
    url_gif: ["assets\\selectorp1.gif","assets\\selectorp2.gif","assets\\selectorp3.gif"],
    gif: document.querySelector("#B10gif")
}
//Movimientos para seleccionar personajes 

brawlerSelected(0,0)
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
    }
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
    }
}