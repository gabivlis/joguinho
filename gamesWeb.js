function desenhaImagens(){
    canvas= document.getElementById("canv");
    img= new Image();
    img.src = "img/nave.png";
    img.onload = function(){
        ctx.drawImage(img,0,0);
        ctx.drawImage(img,600,0,100,100);
        



    }
}