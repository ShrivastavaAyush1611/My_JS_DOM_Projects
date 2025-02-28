const random = function(){
    let hex = "0123456ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];

    }
    return color;
}
 let intervel;
const ChangeBC = function(){
    document.body.style.backgroundColor = random();
}
  const startChangingColor = function(){
    if(!intervel){
     intervel = setInterval(ChangeBC,100);
  
    }  
} 
  const stopChangingColor = function(){
    clearInterval(intervel);
    intervel = null
  }
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
    
