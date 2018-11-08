var canvas = document.querySelector("#myCanvas")
var ctx = canvas.getContext("2d")
var grd1 = ctx.createLinearGradient(150, 0, 500, 0)
var grd2 = ctx.createLinearGradient(1400, 0, 1775, 0)
var health_top = window.innerHeight*0.05
var health_bot = window.innerHeight*0.1
var p1_health_left = window.innerWidth*0.04
var p1_health_righ_top = window.innerWidth*0.45
var p1_health_righ_bot = window.innerWidth*0.41

var p2_health_righ = window.innerWidth*0.96
var p2_health_left_top = window.innerWidth*0.55
var p2_health_left_bot = window.innerWidth*0.59
grd1.addColorStop(0, "#c11728")
grd1.addColorStop(1, "#ffe928")
grd2.addColorStop(0, "#ffe928")
grd2.addColorStop(1, "#c11728")

P1health(p1_health_left, health_top, p1_health_righ_top, health_top, p1_health_righ_bot, health_bot, p1_health_left, health_bot, p1_health_left, health_top)
health_border(p1_health_left, health_top, p1_health_righ_top, health_top, p1_health_righ_bot, health_bot, p1_health_left, health_bot, p1_health_left, health_top,6,"#565653")

P2health(p2_health_righ, health_top, p2_health_left_top, health_top, p2_health_left_bot, health_bot, p2_health_righ, health_bot, p2_health_righ, health_top)
health_border(p2_health_righ, health_top, p2_health_left_top, health_top, p2_health_left_bot, health_bot, p2_health_righ, health_bot, p2_health_righ, health_top,6,"#565653")






function P1health(tlx,tly,trx,tri,brx,bry,blx,bly,endx,endy){
    ctx.beginPath()
    ctx.fillStyle = grd1
    // esquina superior izquierda
    ctx.moveTo(tlx, tly)
    // esquina superior derecha
    ctx.lineTo(trx,tri)
    // esquina inferior derecha
    ctx.lineTo(brx,bry)
    // esquina inferior izquierda
    ctx.lineTo(blx,bly)
    // cierre
    ctx.lineTo(endx,endy)
    ctx.closePath()
    ctx.fill()
}
function P2health(tlx,tly,trx,tri,brx,bry,blx,bly,endx,endy){
    ctx.beginPath()
    ctx.fillStyle = grd2
    // esquina superior izquierda
    ctx.moveTo(tlx, tly)
    // esquina superior derecha
    ctx.lineTo(trx,tri)
    // esquina inferior derecha
    ctx.lineTo(brx,bry)
    // esquina inferior izquierda
    ctx.lineTo(blx,bly)
    // cierre
    ctx.lineTo(endx,endy)
    ctx.closePath()
    ctx.fill()
}
function health_border(tlx,tly,trx,tri,brx,bry,blx,bly,endx,endy,width,color){
    ctx.beginPath()
    ctx.lineWidth= width
    ctx.strokeStyle= color
    ctx.moveTo(tlx, tly)
    // esquina superior derecha
    ctx.lineTo(trx,tri)
    // esquina inferior derecha
    ctx.lineTo(brx,bry)
    // esquina inferior izquierda
    ctx.lineTo(blx,bly)
    // cierre
    ctx.lineTo(endx,endy)
    ctx.stroke()
    ctx.closePath()
}

