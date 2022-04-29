//ANDIE PUENTES 
//1.AZUL_agua (origen de la vida)
//Se inicia la pantalla sin colores, al final de esta, se obtiene el color azul
//Al acabar, accede a la carpeta 2.amarillo

function setup(){
    createCanvas(600,400);  
    background(200)
}

//tiempo
t=0
function draw(){
    t=t+1
    background(200)
    //mitad de altura (h)
    let mitadh = height/2
    //radio
    let r = 4
    //la posición del personaje avanza en función del paso del tiempo, partiendo de 50
    let xdelpersonaje = t+50
    let degradado= map(xdelpersonaje,50,600,0,255)

    //personaje
    noStroke()
    fill(150)
    fill (25)
    circle(xdelpersonaje,mitadh,r)
    
    //personaje en 100
    if(xdelpersonaje>=100){
        for (let i = 200; i<=500; i=i+100){
            noStroke()
            fill(degradado-50)
            ellipse(i,height/2,r)
        }}

    //personaje en 200
    if(xdelpersonaje>=200){
        stroke(200)
        strokeWeight(5)
        fill(200)
        ellipse(200,height/2,r)
        noStroke()
        fill(degradado)
        circle(xdelpersonaje,mitadh,r*5)
    }

    //personaje en 300
    if(xdelpersonaje>=300){
        stroke(200)
        strokeWeight(5)
        fill(200)
        ellipse(300,height/2,r)
        noStroke()
        fill(degradado)
        circle(xdelpersonaje,mitadh,r*10)
    }

    //personaje en 400
    if(xdelpersonaje>=400){
        stroke(200)
        strokeWeight(5)
        fill(200)
        ellipse(400,height/2,r)
        noStroke()
        fill(degradado)
        circle(xdelpersonaje,mitadh,r*15)
    }

    //personaje en 500
    if(xdelpersonaje>=500){
        stroke(200)
        strokeWeight(5)
        fill(200)
        ellipse(500,height/2,r)
        noStroke()
        fill(degradado)
        circle(xdelpersonaje,mitadh,r*20)
    }
    
    //inundación equivale al rectángulo que va inundando de azul (de agua), la pantalla
    let inundación=map(xdelpersonaje,50,550,-50,500)
    rect(0,0,inundación,400)
    
    if(xdelpersonaje>=400){
    //añadir color a la inundación
    fill(0,0,255,100)
    rect(0,0,inundación,400)
    }
}