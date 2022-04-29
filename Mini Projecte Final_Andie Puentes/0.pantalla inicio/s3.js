//ANDIE PUENTES 
//COLORES_INTRO
//Al colocarte encima del "botón" jugar durante 5 segundos, la pantalla se vuelve negra a partir de un degradado para dar comienzo al juego
//Deberás atravesar 5 niveles para recuperar los colores en un mundo en blanco y negro  
//accede a la carpeta 1.azul para continuar con la experiencia

let colores;
let jugar;
let invertido;

function setup(){
    createCanvas(600,400);  
    colores = loadImage("portada.png")
    jugar = loadImage("jugar.png")
    invertido =loadImage("jugar_invertido.png")}

//tiempo
t=0
//juego (para el cambio de color del "botón")
j=0
// bn para el degradado de blanco a negro
bn=0

function draw(){
    t=t+1
    image (colores,1,1,598,398)
    if(t>=60*1){
    image (jugar,1,1,598,398)

    //crear límites del botón jugar
    let leftwall=mouseX>230
    let topwall=mouseY>280
    let rightwall=mouseX<=375
    let botttomwall=mouseY<=325

    //invertir el color del botón jugar
    if (topwall&&leftwall&&rightwall&&botttomwall){
        image (invertido,1,1,598,398)
        j=j+1
    }
        
    if((topwall&&leftwall&&rightwall&&botttomwall)&&(j>60*5)){
        degradadoBlancoNegro()}}
}

function degradadoBlancoNegro(){
    noLoop()
    for (i=1;i<=255;i=i+1){
    noStroke()
    fill(255-bn)
    rect(i*i,0,bn,400)}
    loop()
    bn=bn+1
}