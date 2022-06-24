
//evrythin has load progress when run this fun



let pe,ce;

//function hide(){

//}




//GameStart()





const progress=()=>{



pe=document.createElement('div');
ce=document.createElement('div');

pe.setAttribute('id','load-bar')
ce.setAttribute('class','loadin')

pe.append(ce)
//body.append(pe)
//pe.removeChild()
body.appendChild(pe)

//body.firstChild(pe,0)


console.log(body)



//GameStart()
setTimeout(()=>{



//loadBar.style.display='none';

body.removeChild(pe)

uiBar.style.display='block';
startBtn.style.display='block';
//GameStart()

}, 3000);


}




//evrythin has load and start button will click GameStart fun will run

const GameStart=()=>{



player=new Box(200,200,20,20,'red')






//console.log(ss)



//event start







const gameLoop=()=>{


if(paint){
movin.x = relative.x;
movin.y = relative.y;
JoyAngle = angle_in_degrees
}else{
movin.x = relative.x = 0;
movin.y = relative.y = 0;
JoyAngle = angle_in_degrees = 0;
}




requestAnimationFrame(gameLoop)

ctx.clearRect(0,0,cvs.width,cvs.height)




handleParlicles()
player.update()


ctx.font="16px sans-serif";
CTXtext(`SORCE : ${sorce}`,cvs.width/2,30)
CTXtext(`pos : 
x: ${movin.x}
y: ${movin.y}
angle: ${JoyAngle}
`,cvs.width/2.3,70)




hue++

}



//document.body.onload =
gameLoop()

}






uiBar.addEventListener('click',()=>{



let hides=document.querySelectorAll('.hides');


//GameStart()

console.log(hides);


hides.forEach((c)=>{

//c.style.display='block'

c.classList.remove('hide');
//console.log(c);

})

GameStart()

mainBox.requestFullscreen()

uiBar.style.display='none'


})

