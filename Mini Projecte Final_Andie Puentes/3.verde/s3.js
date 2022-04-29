//ANDIE PUENTES 
//3.VERDE_plantas/naturaleza
//Se inicia la pantalla sin colores, al final de esta, se obtiene el color verde
//Al acabar, accede a la carpeta 4.rojo

function setup(){
    createCanvas(600,400);  
    background(200)
}

//tiempo
t=0
//desplazamiento con tiempo a partir de la posición 150 del personaje
p150=0
//desplazamiento con tiempo a partir de la posición 450 del personaje
p450=0

function draw(){
    background(200)
    t=t+1
    //radio
    let r=5
    //posición del personaje en función del tiempo
    let posicionpersonaje = t
    noStroke()
    fill(0)
    ellipse(posicionpersonaje,200,r)


//posición +150 del personaje
    if(posicionpersonaje>=150){
    p150=p150+1.5
    //planta 1
    let florecer = map(p150,0,600,400,0)
    push();
    translate(100,florecer)
    stroke(0)
    line(0,0,0,200)
    
    push();
    rotate(radians(45))
    noFill();
    ellipse(30,0,20,50)
    ellipse(100,70,20,50)
    pop();
    push();
    rotate(radians(45))
    noFill();
    ellipse(0,20,40,10)
    ellipse(30,60,50,20)
    pop();
    pop();
    }

//posición +300 del personaje
if(posicionpersonaje>=300){
    //planta estática 2
    push();
    translate(200,315)
    stroke(0)
    line(0,0,0,200)
    
    push();
    rotate(radians(270+45))
    fill(150);
    ellipse(-10,30,40,10)
    ellipse(-31,60,50,20)
    pop();
    push();
    rotate(radians(45))
    fill(150);
    ellipse(10,30,40,10)
    ellipse(31,60,50,20)
    pop();
    pop();
}

//posición del personaje +350
    if (posicionpersonaje>=350){
        background(200)
        ellipse(posicionpersonaje,200,r)
    //planta 1 asentada
    push();
    translate(100,200)
    stroke(0)
    line(0,0,0,200)
    push();
    rotate(radians(45))
    fill(150)
    ellipse(30,0,20,50)
    ellipse(100,70,20,50)
    pop();
    push();
    rotate(radians(45))
    fill(150)
    ellipse(0,20,40,10)
    ellipse(30,60,50,20)
    pop();
    pop();
    push();
    translate(200,315)
    stroke(0)
    line(0,0,0,200)

    //repintar planta
    push();
    rotate(radians(270+45))
    fill(150);
    ellipse(-10,30,40,10)
    ellipse(-31,60,50,20)
    pop();
    push();
    rotate(radians(45))
    fill(150);
    ellipse(10,30,40,10)
    ellipse(31,60,50,20)
    pop();
    pop();
    }

//posición del perosnaje +350
    if (posicionpersonaje>=350){
    //planta 3 estática 
    push();
    translate(300,100)
    strokeWeight(1)
    stroke(0)
    line(0,0,0,400)
    pop();
   
        //pétalos superiores
        push();
        translate(width/2,100)
        rotate(radians(45))
        stroke(0)
        fill(255);
        ellipse(10,30,40,10)
        pop();
        push();
        translate(width/2,100)
        rotate(radians(270+45))
        stroke(0)
        fill(255);
        ellipse(-10,30,40,10)
        pop();
   
        //pétalos intermedio
        pop();
        push();
        translate(300,150)
        rotate(radians(270+45))
        stroke(0)
        fill(255);
        ellipse(-48,70,40,20)
        pop();
        push();
        translate(300,150)
        rotate(radians(45))
        stroke(0)
        fill(255);
        ellipse(48,70,40,20)
        pop();
        pop();

        //pétalos inferiores
        pop();
        push();
        translate(300,300)
        rotate(radians(55))
        stroke(0)
        fill(255);
        ellipse(25,45,60,30)
        pop();
        push();
        translate(300,300)
        rotate(radians(270+55))
        stroke(0)
        fill(255);
        ellipse(-10,60,60,30)
        pop();
        pop();
    }

//posición personaje +450
    if(posicionpersonaje>=450){
        p450=p450+1.5
        let florecer = map(p450,0,600,400,0)
        push();
         translate(450,florecer)
         stroke(0)
         line(0,0,0,150)
         
         push();
         rotate(radians(270+45))
         noFill();
         ellipse(-0,20,40,10)
         ellipse(-15,0,10,30)
         pop();
         push();
         rotate(radians(45))
         noFill();
         
         ellipse(30,60,50,20)
         ellipse(79,50,20,50)
         pop();
         pop();
    }

 //posición +600 del personaje
    if(posicionpersonaje>=600){
    //recuperar color verde
    background(198,213,126)
    ellipse(posicionpersonaje,200,r)
    push();
     translate(450,250)
     stroke(0)
     line(0,0,0,150)
     
     push();
     rotate(radians(270+45))
     fill(220);
     ellipse(-0,20,40,10)
     ellipse(-15,0,10,30)
     pop();
     push();
     rotate(radians(45))
     fill(220);
     ellipse(30,60,50,20)
     ellipse(79,50,20,50)
     pop();
     pop();

     //planta 3 estática repintar

   push();
   translate(300,100)
   strokeWeight(1)
   stroke(0)
   line(0,0,0,400)
   pop();
   

   //pétalos superiores
 
   push();
   translate(width/2,100)
   rotate(radians(45))
   stroke(0)
   fill(255);
   ellipse(10,30,40,10)
   pop();
   push();
   translate(width/2,100)
   rotate(radians(270+45))
   stroke(0)
   fill(255);
   ellipse(-10,30,40,10)
   pop();
   
   //pétalos intermedio

   pop();
   push();
   translate(300,150)
   rotate(radians(270+45))
   stroke(0)
   fill(255);
   ellipse(-48,70,40,20)
   pop();
   push();
   translate(300,150)
   rotate(radians(45))
   stroke(0)
   fill(255);
   ellipse(48,70,40,20)
   pop();
   pop();

   //pétalos inferiores
   
   pop();
   push();
   translate(300,300)
   rotate(radians(55))
   stroke(0)
   fill(255);
   ellipse(25,45,60,30)
   pop();
   push();
   translate(300,300)
   rotate(radians(270+55))
   stroke(0)
   fill(255);
   ellipse(-10,60,60,30)
   pop();
   pop();


    //repintar planta 1
    push();
    translate(100,200)
    stroke(0)
    line(0,0,0,200)
    push();
    rotate(radians(45))
    fill(220)
    ellipse(30,0,20,50)
    ellipse(100,70,20,50)
    pop();
    push();
    rotate(radians(45))
    fill(220)
    ellipse(0,20,40,10)
    ellipse(30,60,50,20)
    pop();
    pop();
    pop();

    //planta 2
    push();
    translate(200,315)
    stroke(0)
    line(0,0,0,200)
    push();
    rotate(radians(270+45))
    fill(220);
    ellipse(-10,30,40,10)
    ellipse(-31,60,50,20)
    pop();
    push();
    rotate(radians(45))
    fill(220);
    ellipse(10,30,40,10)
    ellipse(31,60,50,20)
    pop();
    pop();
}}