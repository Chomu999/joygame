//let uiBar,mainBox.cvs,ctx,mapCvs,mapctx,joyStick,joyctx;

let body=document.body;
let gameSpeed=2;
let player;
let hue=0;


let parlicles=[]

let uiBar=document.querySelector('#ui-bar'),
startBtn=document.querySelector('.start'),
mainBox=document.querySelector('#mainBox');


//loadBar=document.querySelector('#load-bar');



const cvs=document.querySelector('.gameScreen');
const ctx=cvs.getContext('2d');


const joyStick=document.querySelector('.joyStick');
const joyctx=joyStick.getContext('2d');




//const mapCvs=document.querySelector('.mapScreen');
//const mapctx=mapCvs.getContext('2d');



//joyStick setting lol

let relative={x:0,y:0}

let radius = 20,angle_in_degrees;
let JoyAngle = 0;
let orig={x:0,y:0};

let coord = { x: 0, y: 0 };
let paint = false;





let sorce=0;




let touch=['touchstart','touchmove','touchend'];




let movin={
x:0,
y:0,
top:false,
left:false,
right:false,
down:false,
speed:0.6
};


let main={
width:innerWidth,

height:innerHeight
};


let playerInFo={
x:0,
y:0,
width:0,
height:0
};




//cvs.width=window.innerWidth;
//cvs.height=window.innerHeight;





cvs.width=innerWidth;
cvs.height=innerHeight;

if(main.width <= main.height){

joyStick.width= main.width/1.65;
joyStick.height= main.width/1.65;

}else{

joyStick.width= main.height/1.65;
joyStick.height= main.height/1.65;

}

