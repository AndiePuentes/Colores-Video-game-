//ANDIE PUENTES 
//5.MORADO_constelaciones
//Se inicia la pantalla sin colores, al final de esta, se obtiene el color morado
//Al acabar, habrás conseguido todos los colores, enhorabuena!!

function setup(){
    createCanvas(600,400);  
    background(200)
}

//tiempo
t=0

function draw(){
    t=t+1
    background(200)
    //posición del personaje en fucnión de t
    let xdelpersonaje = map(t,0,600,50,550)
    //mitad de la altura (h)
    let mitadh = height/2
    //radio
    let r = 5
    for (let i = 100; i<=550; i=i+50){
    for (let j = 50; j<=350; j=j+50){
    noStroke()
    fill(150)
    ellipse(i, j, r)
    
    fill (25)
    circle(xdelpersonaje,mitadh,r)
    
//personaje en 100
    if (xdelpersonaje>=100){
        stroke(0)
        line (100-r,200+r,50+r,250-r)}
        
//personaje en 150
    if (xdelpersonaje>=150){
        stroke(0)
        line (100,200-r,100,150+r)
        line (150,250+r,150,300-r)
        for (let jp = 50; jp<=350; jp=jp+50){
            //let x=map(i,0,400,0,600)
            noStroke()
            fill(150)
            ellipse(50, jp, r)}}
        
//personaje en 200
    if (xdelpersonaje>=200){
        stroke(0)
        line (400-r,100-r,350+r,50+r)
        line(100+r,150-r,150-r,100+r)
        line(400-r,100-r,350+r,50+r)
        line(100+r,200+r,150-r,250-r)
        line(450+r,300-r,500-r,250+r)}
        
//personaje en 250
    if (xdelpersonaje>=250){
        stroke(0)
        line (150-r,100-r,100+r,50+r)
        line (150+r,100,200-r,100)
        line (150-r,300+r,100+r,350-r)
        line (450,300+r,450,350-r)}
        
//personaje en 300
    if (xdelpersonaje>=300){
        noStroke()
        fill(0)
        ellipse(150,100,r)}

//personaje en 350
    if (xdelpersonaje>=350){
        noStroke()
        fill(0)
        ellipse(100,200,r)
        ellipse(500,100,r)
        stroke(0)
        line (150+r,250-r,200-r,200+r)
        line(150+r,300+r,200-r,350-r)
        line(500+r,100+r,550-r,150-r)
        line(450-r,300-r,400+r,250+r)}
        
//personaje en 400
    if (xdelpersonaje>=400){
        noStroke()
        fill(0)
        ellipse(400,250,r)
        ellipse(350,50,r)
        stroke(200)
        fill(150)
        ellipse(500,100,r)
        ellipse(150,100,r)

        stroke(0)
        line (400-r,250-r,350+r,200+r)}

        //personaje en 450
    if (xdelpersonaje>=450){
        noStroke()
        fill(0)
        ellipse(400,250,r)
        ellipse(150,300,r)
        
        stroke(200)
        fill(150)
        ellipse(100,200,r)

        stroke(0)
        line (350,150+r,350,200-r)
        line (550-r,50+r,500+r,100-r)}

//personaje en 500
    if (xdelpersonaje>=500){
        noStroke()
        fill(0)
        ellipse(350,150,r)
        ellipse(500,100,r)
        
        stroke(200)
        fill(150)
        ellipse(350,50,r)

        stroke(0)
        line (200+r,200-r,250-r,150+r)
        line (350+r,150-r,400-r,100+r)}

        //personaje en 550
    if (xdelpersonaje>=550){
        t=t+1
        fill(200)
        circle(xdelpersonaje,mitadh,r)
        noStroke()
        fill(0)
        ellipse(150,100,r)
        ellipse(100,150,r)
        ellipse(100,200,r)
        ellipse(150,250,r)
        ellipse(200,200,r)
        ellipse(250,150,r)
        ellipse(300,150,r)
        ellipse(350,200,r)
        ellipse(400,100,r)
        ellipse(450,100,r)
        ellipse(450,300,r)
        
        if (t>=60*50){
            background(160, 60, 120)
            let radiofinal = 1
            for (let x = 50; x<=550; x=x+50){
            for (let y = 50; y<=350; y=y+50){
                stroke(150)
                fill(150)
                ellipse(x, y,radiofinal)}}

          noStroke()
          fill(255)
            ellipse(100,150,r)
            ellipse(100,200,r)
            ellipse(150,100,r)
            ellipse(150,250,r)
            ellipse(150,300,r)
            ellipse(200,200,r)
            ellipse(250,150,r)
            ellipse(300,150,r)
            ellipse(350,50,r)
            ellipse(350,150,r)
            ellipse(350,200,r)
            ellipse(400,100,r)
            ellipse(400,250,r)
            ellipse(450,100,r)
            ellipse(450,300,r)
            ellipse(500,100,r)
            
          stroke(255)
            line (100-r,200+r,50+r,250-r)
            line (100,200-r,100,150+r)
            line (150,250+r,150,300-r)
            line (400-r,100-r,350+r,50+r)
            line (100+r,150-r,150-r,100+r)
            line (100+r,200+r,150-r,250-r)
            line (450+r,300-r,500-r,250+r)
            line (150-r,100-r,100+r,50+r)
            line (150+r,100,200-r,100)
            line (150-r,300+r,100+r,350-r)
            line (450,300+r,450,350-r)
            line (150+r,250-r,200-r,200+r)
            line (150+r,300+r,200-r,350-r)
            line (500+r,100+r,550-r,150-r)
            line (450-r,300-r,400+r,250+r)
            line (400-r,250-r,350+r,200+r)
            line (200+r,200-r,250-r,150+r)
            line (350+r,150-r,400-r,100+r)
            line (300+r,150,350-r,150)
            line (400+r,100,450-r,100)  
            line(250+r,150,300-r,150)
            line(450+r,100,500-r,100)
            line(350,150+r,350,200-r)
}}}}}