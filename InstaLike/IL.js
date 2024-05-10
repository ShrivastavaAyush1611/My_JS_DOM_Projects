 let con = document.querySelector("#container");
 var love = document.getElementById("heart");
 let sideH = document.querySelector("#sideH");

 con.addEventListener('dblclick',function(){
    love.style.transform = "translate(-50%,-50%) scale(1)"
    setTimeout(function(){
        love.style.opacity = 0;
      },1000)
      setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
      },2000)
   sideH.style.color = "red";
    
 });