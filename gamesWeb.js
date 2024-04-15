function desenhaImagens(){
    canvas= document.getElementById("canv");
    img= new Image();
    img.src = "img/cenario.png";
    img.onload = function(){
        ctx.drawImage(img,600,0,300,600);


    }
}