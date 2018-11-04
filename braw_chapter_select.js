var brawlers = new Array()
var p1_selected_brawler = 0
var p2_selected_brawler = 0

// funciones para colocar el gif del brawler seleccionado
function gif1(s){
    brawlers[s].gif1.style.visibility = "visible"
}
function gif2(s){
    brawlers[s].gif2.style.visibility = "visible"
}
function gif3(s){
    brawlers[s].gif3.style.visibility = "visible"
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
    url_icon: "asset\\icons\\ryu",
    url_foto: "assets\\photos\\ryu",
    gif1: document.querySelector("#B1gif1"),
    gif2: document.querySelector("#B1gif2")
}
brawlers[1] = {
    name:"Ken",
    url_icon: "asset\\icons\\ken",
    url_foto: "assets\\photos\\ken",
    selected: false,
    gif1: document.querySelector("#B2gif1"),
    gif2: document.querySelector("#B2gif2")
}
brawlers[2] = {
    name:"Guiles",
    url_icon: "asset\\icons\\guiles",
    url_foto: "assets\\photos\\guiles",
    selected: false,
    gif1: document.querySelector("#B3gif1"),
    gif2: document.querySelector("#B3gif2")
}
brawlers[3] = {
    name:"Guiles",
    url_icon: "asset\\icons\\guiles",
    url_foto: "assets\\photos\\guiles",
    selected: false,
    gif1: document.querySelector("#B4gif1"),
    gif2: document.querySelector("#B4gif2")
}
brawlers[4] = {
    name:"Chun-Li",
    url_icon: "asset\\icons\\chun-li",
    url_foto: "assets\\photos\\chun-li",
    selected: false,
    gif1: document.querySelector("#B5gif1"),
    gif2: document.querySelector("#B5gif2")
}
brawlers[5] = {
    name:"Ken",
    url_icon: "asset\\icons\\ken",
    url_foto: "assets\\photos\\ken",
    selected: false,
    gif1: document.querySelector("#B6gif1"),
    gif2: document.querySelector("#B6gif2")
}
brawlers[6] = {
    name:"Guiles",
    url_icon: "asset\\icons\\guiles",
    url_foto: "assets\\photos\\guiles",
    selected: false,
    gif1: document.querySelector("#B7gif1"),
    gif2: document.querySelector("#B7gif2")
}
brawlers[7] = {
    name:"Chun-Li",
    url_icon: "asset\\icons\\chun-li",
    url_foto: "assets\\photos\\chun-li",
    selected: false,
    gif1: document.querySelector("#B8gif1"),
    gif2: document.querySelector("#B8gif2")
}
brawlers[8] = {
    name:"Chun-Li",
    url_icon: "asset\\icons\\chun-li",
    url_foto: "assets\\photos\\chun-li",
    selected: false,
    gif1: document.querySelector("#B9gif1"),
    gif2: document.querySelector("#B9gif2")
}
brawlers[9] = {
    name:"Chun-Li",
    url_icon: "asset\\icons\\chun-li",
    url_foto: "assets\\photos\\chun-li",
    selected: false,
    gif1: document.querySelector("#B10gif1"),
    gif2: document.querySelector("#B10gif2")
}
gif1(0)

//Movimientos para seleccionar personajes 


onkeydown = e => {
    // Derecha P1 y P2

    // P1
    if(e.keyCode == 68){
        brawlers[p1_selected_brawler].gif1.style.visibility = "hidden"
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
        brawlers[p1_selected_brawler].gif1.style.visibility="visible"
        brawlerSelected(p1_selected_brawler,p2_selected_brawler)
    }
    //P2
    else if(e.keyCode == 39){
        brawlers[p2_selected_brawler].gif2.style.visibility = "hidden"
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
        brawlers[p2_selected_brawler].gif2.style.visibility="visible"
        brawlerSelected(p1_selected_brawler,p2_selected_brawler)
    }

    //Izquierda

    //P1
    else if(e.keyCode==65){
            brawlers[p1_selected_brawler].gif1.style.visibility = "hidden"
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
            brawlers[p1_selected_brawler].gif1.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
        }
    //P2
    else if(e.keyCode==37){
            brawlers[p2_selected_brawler].gif2.style.visibility = "hidden"
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
            brawlers[p2_selected_brawler].gif2.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
    }

    //Arriba

    //P1
    else if(e.keyCode == 87){
            brawlers[p1_selected_brawler].gif1.style.visibility = "hidden"
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
            brawlers[p1_selected_brawler].gif1.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
    }
    //P2
    else if(e.keyCode == 38){
            brawlers[p2_selected_brawler].gif2.style.visibility = "hidden"
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
            brawlers[p2_selected_brawler].gif2.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
    }

    //Abajo

    //P1
    else if(e.keyCode == 83){
            brawlers[p1_selected_brawler].gif1.style.visibility = "hidden"
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
            brawlers[p1_selected_brawler].gif1.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
    }
    else  if(e.keyCode == 40){
            brawlers[p2_selected_brawler].gif2.style.visibility = "hidden"
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
            brawlers[p2_selected_brawler].gif2.style.visibility="visible"
            brawlerSelected(p1_selected_brawler,p2_selected_brawler)
    }
}