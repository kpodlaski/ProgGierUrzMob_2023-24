var url = 'skeleton.png'
var game_objects = [];

function init(){
    console.log("image",image, image.width);
    game_objects.push( new GameObject(image, 20, 20, 5, 0, 9, 4, 3, 3));
    game_objects.push( new GameObject(image, 20, 120, 5, 0, 9, 4, 3, 1));
    animation();
}

function animation(){
    var canva = document.getElementById("drawing_canvas");
    var ctx = canva.getContext("2d");
    //ctx.clearRect(0,0,200, 200);
    for (i =0; i<game_objects.length; i++){
        game_objects[i].drawOnScreen(ctx);      
    }
    //update position
    for (i =0; i<game_objects.length; i++){
        game_objects[i].move();
    }  
    setTimeout(animation.bind(this),100);
}

var image = new Image();
image.src = url;
image.onload = init