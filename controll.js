

function send(x,y,speed,angle){
var data = {"x":x,"y":y,"speed":speed,"angle":angle};
data = JSON.stringify(data);
console.log(data);
}




joyStick.addEventListener('touchstart', startDrawing);

joyStick.addEventListener('touchmove', Draw);

joyStick.addEventListener('touchend', stopDrawing);

joyStick.addEventListener('touchcancel', stopDrawing);




function joystick(x, y) {
joyctx.beginPath();
joyctx.arc(x,y,radius+10,0, Math.PI * 2, true);
joyctx.fillStyle = '#F08080';
joyctx.fill();
joyctx.strokeStyle = '#F6ABAB';
joyctx.lineWidth = 8;
joyctx.closePath();
joyctx.stroke();

}





function background() {
orig.x = joyStick.width / 2;
orig.y = joyStick.height / 2;


joyctx.lineWidth = 5;

joyctx.beginPath();
joyctx.arc(orig.x,orig.y, radius + 30, 0, Math.PI * 2, true);
joyctx.fillStroke = 'green';
joyctx.closePath();
joyctx.stroke();

joyctx.beginPath();
joyctx.arc(orig.x,orig.y, radius + 30/2, 0, Math.PI * 2, true);
joyctx.closePath();
joyctx.stroke();

//joyctx.fill();
}






function getPosition(event) {
let mouse={
x:0,
y:0
}
mouse.x = event.touches[0].clientX || event.clientX;
mouse.y = event.touches[0].clientY || event.clientY;


coord.x = mouse.x - joyStick.offsetLeft;

coord.y = mouse.y - joyStick.offsetTop;
}



function is_it_in_the_circle() {

var current_radius = Math.sqrt(Math.pow(coord.x - orig.x, 2) + Math.pow(coord.y - orig.y, 2));


if (radius >= current_radius) return true
else return false


}


function startDrawing(event) {
paint = true;
getPosition(event);

if(is_it_in_the_circle()){

joyctx.clearRect(0, 0, joyStick.width, joyStick.height);
background();
joystick(coord.x, coord.y);
Draw();
}

}



function stopDrawing() {
paint = false;
joyctx.clearRect(0, 0, joyStick.width, joyStick.height);
background();
joystick(joystick.width / 2, joyStick.height / 2);




joyctx.fillStyle='red'
joyctx.fillRect(0,joyStick.height/2,joyStick.width,1)
joyctx.fillRect(joyStick.width/2,0,1,joyStick.height)





}



function Draw(event) {

if (paint) {
joyctx.clearRect(0, 0, joyStick.width, joyStick.height);






background();
var x, y, speed;

var angle = Math.atan2((coord.y - orig.y), (coord.x - orig.x));

if (Math.sign(angle) == -1) {

angle_in_degrees = Math.round(-angle * 180 / Math.PI);
}
else {
angle_in_degrees =Math.round( 360 - angle * 180 / Math.PI);
}


if (is_it_in_the_circle()) {
joystick(coord.x, coord.y);
x = coord.x;
y = coord.y;
}
else {
x = radius * Math.cos(angle) + orig.x;
y = radius * Math.sin(angle) + orig.y;
joystick(x, y);
}


getPosition(event);


var speed =  Math.round(100 * Math.sqrt(Math.pow(x - orig.x, 2) + Math.pow(y - orig.y, 2)) / radius);


relative.x = Math.round(x - orig.y);

relative.y = Math.round(y - orig.y);



//send( relative.x,relative.y,speed,angle_in_degrees);


//console.log(' normla: '+relative.x,relative.y);
//console.log(' always p: '+Math.abs(relative.x),Math.abs(relative.y));



}




joyctx.fillStyle='red'
joyctx.fillRect(0,joyStick.height/2,joyStick.width,1)
joyctx.fillRect(joyStick.width/2,0,1,joyStick.height)




}
