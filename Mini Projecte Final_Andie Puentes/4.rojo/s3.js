//ANDIE PUENTES 
//4.ROJO_corazónç//Se inicia la pantalla sin colores, al final de esta, se obtiene el color rojo
//Al acabar, accede a la carpeta 5.morado

function setup(){
    createCanvas(600,400); 
}

//tiempo
t=0
//tiempo para los latidos
b=0

aceleracion=0
let radius = 0
let direction = 1

function draw(){
    t=t+1
    b=b+1
    background (200)
    //radio
    let r=5
    //posición del personaje en función del tiempo
    let posicionpersonaje = map(t,0,600,50,600)
    noStroke()
    fill (0)
    ellipse(posicionpersonaje,height/2,r)

//posición del personaje +75
if(posicionpersonaje>=75){
    strokeWeight(2)
    stroke(0)
    fill(0,50)
    ellipse(width/2,height/2,200)

    //posición del personaje +200
    if(posicionpersonaje>=200){
    noLoop();
    background(200);
    loop();
    noStroke()
    fill (0)
    ellipse(posicionpersonaje,height/2,r)
    strokeWeight(2)
    stroke(0)
    fill(0,50)
    ellipse(width/2,height/2,100)}}

//posición personaje +100
    if(posicionpersonaje>=100){
        strokeWeight(2)
        stroke(0)
        fill(0,50)
    
        let radius=((200)-b)
        if(radius<=0){radius=-radius}
        if(radius<=180)
        {circle(width/2, height/2, radius)}

//posición personaje +300
    if(posicionpersonaje>=300){
        let medio=3/2
        noLoop();
        background (200)
        loop();
        strokeWeight(1)
        stroke(0)
        fill (0,50)
        arc(width/2,75+t/medio,100,100,0,PI)
        arc(width/2,75+t/medio,80,80,0,PI)
        arc(width/2,75+t/medio,50,50,0,PI)
        arc(width/2,325-t/medio,100,100,PI,0)
        arc(width/2,325-t/medio,80,80,PI,0)
        arc(width/2,325-t/medio,50,50,PI,0)
        noStroke()
        fill (0)
        ellipse(posicionpersonaje,height/2,r)
    }
//posición personaje +500
        if(posicionpersonaje>=500){
            noLoop();
            background(200);
            loop();
            noStroke()
            fill (0)
            ellipse(posicionpersonaje,height/2,r)
            strokeWeight(2)
            stroke(0)
            fill(0,50)
            ellipse(0,height/2,200)
            ellipse(0,height/2,300)
            ellipse(0,height/2,b*3/2)
            ellipse(0,height/2,b)
            if(b>=600){
                aceleracion=aceleracion+1
            fill(255,0,0,100)
            ellipse(0,height/2,b)}
            strokeWeight(2)
            stroke(0)
            fill(0,100)
            ellipse(0,height/2,200)
            ellipse(0,height/2,300)
}}}