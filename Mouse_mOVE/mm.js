let elm = document.querySelectorAll('#elm');
// let img = document.querySelector('#elm img')

elm.forEach(function(dets){
    // console.log(dets.childNodes[3]);
     dets.addEventListener("mouseenter",function(){
      dets.childNodes[3].style.opacity = 1; 
    });
    dets.addEventListener("mouseleave",function(){
        dets.childNodes[3].style.opacity = 0; 
    });
    dets.addEventListener('mousemove',function(det){
        dets.childNodes[3].style.left = det.x+"px";
        dets.childNodes[3].style.right = det.y+"px";
    })
});