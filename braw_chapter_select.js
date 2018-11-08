var brawlers = new Array()
var p1_selected_brawler = 0
var p2_selected_brawler = 0
var p1_image = document.querySelector("#img_p1")
var p2_image = document.querySelector("#img_p2")
var p1_gif = document.querySelector("#P1gif")
var p2_gif = document.querySelector("#P2gif")
var p1_name = document.querySelector("#FP")
var p2_name = document.querySelector("#SP")
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
    gif: document.querySelector("#B1gif")
}
brawlers[1] = {
    name:"KEN",
    url_icon: "assets\\icons\\ken.gif",
    url_foto: ["assets\\photos\\ken1.gif","assets\\photos\\ken2.gif"],
    icon: document.querySelector("#B2icon"),
    gif: document.querySelector("#B2gif")
}
brawlers[2] = {
    name:"CHUN-LI",
    url_foto: ["assets\\photos\\chun-li1.gif","assets\\photos\\chun-li2.gif"],
    gif: document.querySelector("#B3gif")
}
brawlers[3] = {
    name:"ALEX",
    url_icon: "asset\\icons\\guiles",
    url_foto: ["assets\\photos\\alex1.gif","assets\\photos\\alex2.gif"],
    gif: document.querySelector("#B4gif")
}
brawlers[4] = {
    name:"SEAN",
    url_icon: "asset\\icons\\chun-li",
    url_foto: ["assets\\photos\\sean1.gif","assets\\photos\\sean2.gif"],
    gif: document.querySelector("#B5gif")
}
brawlers[5] = {
    name:"YUN",
    url_icon: "asset\\icons\\ken",
    url_foto: ["assets\\photos\\yun1.gif","assets\\photos\\yun2.gif"],
    gif: document.querySelector("#B6gif")
}
brawlers[6] = {
    name:"YANG",
    url_icon: "asset\\icons\\guiles",
    url_foto: ["assets\\photos\\yang1.gif","assets\\photos\\yang2.gif"],
    gif: document.querySelector("#B7gif")
}
brawlers[7] = {
    name:"IBUKI",
    url_icon: "asset\\icons\\chun-li",
    url_foto: ["assets\\photos\\ibuki1.gif","assets\\photos\\ibuki2.gif"],
    gif: document.querySelector("#B8gif")
}
brawlers[8] = {
    name:"TWELVE",
    url_icon: "asset\\icons\\chun-li",
    url_foto: ["assets\\photos\\twelve1.gif","assets\\photos\\twelve2.gif"],
    gif: document.querySelector("#B9gif")
}
brawlers[9] = {
    name:"AKUMA",
    url_icon: "asset\\icons\\chun-li",
    url_foto: ["assets\\photos\\akuma1.gif","assets\\photos\\akuma2.gif"],
    gif: document.querySelector("#B10gif")
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