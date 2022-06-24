//let a=0

//let JoyAngle;

class Box{
constructor(x,y,width,height,color){

this.x=x
this.y=y
this.color=color
this.width=width
this.height=height
this.speed={x:0,y:0}
}
draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.x,this.y,this.width,this.height)

}




update(){
this.draw()

this.x += this.speed.x
this.y += this.speed.y



//for top
if(paint && JoyAngle <= 110 && JoyAngle >= 70)
{
this.top()
}


// for topleft
else if(paint && JoyAngle <= 165 && JoyAngle >= 125)
{this.topleft()}





// for topright
else if(paint && JoyAngle <= 65 && JoyAngle >= 25)
{this.topright()}







// for left
else if(paint && JoyAngle <= 200 && JoyAngle >= 160)
{
this.left()
}





//1st for right
else if(paint && JoyAngle <= 360 && JoyAngle >= 340)
{
this.right()
}

//2nd for right
else if(paint && JoyAngle <= 20 && JoyAngle >= 0)
{
this.right()
}






//for down
else if(paint && JoyAngle <= 290 && JoyAngle >= 250)
{
this.down()
}


// for downright
else if(paint && JoyAngle <= 335 && JoyAngle >= 295)
{this.downright()}



// for downleft
else if(paint && JoyAngle <= 245 && JoyAngle >= 205)
{this.downleft()}







else if(!paint){this.Default()}

else{this.Default()}

/*

else if(movin.right){ this.right()}

else if(movin.down){ this.down()}

*/



}


//defined custom function for moving


top(){this.speed.y = -movin.speed}
left(){this.speed.x = -movin.speed}
right(){this.speed.x = movin.speed}
down(){this.speed.y = movin.speed}



topright(){
this.speed.y = -movin.speed
this.speed.x = movin.speed

}


topleft(){
this.speed.y = -movin.speed
this.speed.x = -movin.speed

}


downright(){
this.speed.y = movin.speed
this.speed.x = movin.speed

}


downleft(){
this.speed.y = movin.speed
this.speed.x = -movin.speed

}



Default(){this.speed.x=0;this.speed.y=0;}


}






//

class Parlicle{
constructor(){
this.x=player.x;
this.y=player.y;
this.size=randint(0.2,2);
this.cAlpha=Math.random() * 10;
this.color=`hsl(${hue},100%,50%,${this.cAlpha})`;
this.weight=0.06;
this.speed={x:0,y:0};
}
draw(){
ctx.fillStyle=this.color
ctx.beginPath()
ctx.arc(this.x,this.y,this.size,0,Math.PI * 2)
ctx.fill()
}
update(){
this.draw()
this.x -= gameSpeed
this.speed.y -= this.weight
this.y += this.speed.y



if(this.size > 0.2){

//if(this.cAlpha <= 10) 

this.cAlpha -= 1;



this.size += 0.22;

}





}
}



function handleParlicles(){
parlicles.unshift(new Parlicle())

parlicles.forEach((parlicle)=>{
parlicle.update()
})

if(parlicles.length>669)parlicles.pop()

}








 
//custom function




function randint(min,max){
return Math.floor(Math.random() * (max-min) + min)
}




function DrawSpite(img,sX,sY,sW,sH,dX,dY,dW,dH){
ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH)
}

function IScollision(ObjectA,ObjectB){
return (ObjectA.x + ObjectA.width >= ObjectB.x &&
ObjectA.x <= ObjectB.x + ObjectB.width &&
ObjectA.y + ObjectA.height >= ObjectB.y &&
ObjectA.y <= ObjectB.y + ObjectB.height)
}


function CTXtext(t,x,y){
ctx.fillStyle='#919191';
ctx.fillText(`${t}`,x,y);
}


function ISButtonEvent(traget,condion,fun){
traget.addEventListener(condion,fun);
}





// console.log(180 + 90/2);
// (()=>{
// console.log('fack u');
// })()

for (var i = 0; i < 10; i++) {
let aa=Math.random() * 10;

if(aa <= 3){
console.log(aa+' :if')
}else if(aa <= 6){
console.log(aa+' :else if 1')
}
else if(aa <= 9){
console.log(aa+' :else if 1')
}
else{
console.log(aa+' :else ')
}


}