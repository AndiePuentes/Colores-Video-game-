//ANDIE PUENTES 
//2.AMARILLO_sol/amanecer
//Se inicia la pantalla sin colores, al final de esta, se obtiene el color amarillo
//Al acabar, accede a la carpeta 3.verde

function setup(){
    createCanvas(600,400); 
}

//rayos de luz del sol
b=0
//tiempo
t=0
//amplitud primeras elipses 
u=0
//amplitud segundas elipses
a=0
//opacidad background final
bf=0
let angle = 0
let amanecer = 0
function draw(){
  t=t+1
  amanecer=amanecer+1
  let degradadoamanecer=map (t,0,600,0,175)
  background (degradadoamanecer)
  let posicionpresonaje=map(t,0,600,50,550)
  noStroke()
  fill(0)
  ellipse(posicionpresonaje,height/2, 5)
  stroke(255)
  //color del amanecer en función del tiempo
  let ama = (t,0,60*60,0,175)
  fill(ama)
  //sol
  fill(150,50)
  ellipse (width/2,145,100)

//cuando la posición del pesonaje es +100
  if(posicionpresonaje>=100){
    b=b+1/2
    noStroke()
    fill(amanecer*5,40)
    ellipse(width/2,145,b)}

//cuando la posición del pesonaje es mayor a 50 y menor de 180
  if((posicionpresonaje>=50)&&(posicionpresonaje<=180)){
    push();
    translate(width/2,height)
    //let solpersonaje=map (posicionpresonaje,0,600,0,360)
    rotate(t/40)
    fill(150,50)
    ellipse(175,175,100)
    pop();
  }

//cuando la posición del pesonaje es +180
  if(posicionpresonaje>=180){
    push();
    fill(175,80)
    ellipse(width/2,145,100)
    pop();
  }

//cuando la posición del pesonaje es +200
    if (posicionpresonaje>=200){
      u=u+1
      ellipse(width/2,145,u*2)
      ellipse(width/2,145,u*3)}

//cuando la posición del pesonaje es +400
    if(posicionpresonaje>=400){
      a=a+1
      fill(255,a)
      ellipse(width/2,145,100)
      fill(254,228,64,60)
      ellipse(width/2,145,a*2)
      push();
      reloj();
      pop();
      ellipse(posicionpresonaje,height/2,5) 
  }

//cuando la posición del pesonaje es +800
  if(posicionpresonaje>=800){
    bf=bf+1
    background(255, bf)
    background(254,228,64,60)
  }
  
  function reloj() {
    
    let radi = 100;
  
    translate(width / 2, 145);
  
    fill(0);
    circle(0, 0, 5);
    fill(255);
  
    rotate(radians(180));
    strokeWeight(1);
    // hores
    for (let i = 0; i < 12; i++) {
      rotate(radians(30));
     stroke(254,228,64)
      line(0, radi - 50, 0, radi-20);
    }
    
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let milliSeconds = date.getMilliseconds();
  
    // segondera
    strokeWeight(2);
    push();
    rotate(radians(map(seconds, 0, 60, 0, 360*35)));
    rotate(radians(map(milliSeconds, 0, 1000, 0, 6*35)));
    stroke(254, 228, 64, 60)
    line(0, 0, 0, radi - 20);
    pop();
  
    stroke(0);
  
    // minutera
    strokeWeight(1);
    push();
    rotate(radians(map(minutes, 0, 60, 0, 360*30)));
    rotate(radians(map(seconds, 0, 60, 0, 6*30)));
    line(0, 0, 0, radi*1/3);
    pop();
  
    // hora
    strokeWeight(2);
    push();
    rotate(radians(map(hour, 0, 12, 0, 360*25)));
    rotate(radians(map(minutes, 0, 60, 0, 30*25)));
    line(0, 0, 0, radi * 1/4);
    pop();
  }}