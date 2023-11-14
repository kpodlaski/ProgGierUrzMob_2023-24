var url = 'skeleton.png'
var game_objects = [];

function init(){
    console.log("image",image, image.width);
    game_objects.push(new BgGameObject(bg_sky,0,0,-5,0,1,1,0,1) );
    game_objects.push(new BgGameObject(bg_middle,0,0,-2,0,1,1,0,2) );
    game_objects.push(new BgGameObject(bg_near,0,0,-2,0,1,1,0,1) );
    game_objects.push(new GameObject(image, 20, 360, 0, 0, 9, 4, 3, 3));
    game_objects.push(new GameObject(image, 10, 430, 1, 0, 9, 4, 3, 2));
    
    
    animation();
}

function animation(){
    var canva = document.getElementById("drawing_canvas");
    var ctx = canva.getContext("2d");
    ctx.clearRect(0,0,1000, 2500);
    for (i =0; i<game_objects.length; i++){
        game_objects[i].drawOnScreen(ctx);      
    }
    //update position
    for (i =0; i<game_objects.length; i++){
        game_objects[i].move();
    }  
    setTimeout(animation.bind(this),100);
}

var all_ressources = 4;
var loaded_resources =[];
function loaded_one_ressource(){
    loaded_resources.push(1);
    let sum = 0;
    loaded_resources.forEach( num => {
        sum += num;
    })
    if (sum == all_ressources){
        init();
    }
}

var image = new Image();
image.src = url;
image.onload = loaded_one_ressource;
var bg_middle = new Image();
bg_middle.src = "scrolling_background_middle.png";
bg_middle.onload= loaded_one_ressource;
var bg_sky = new Image();
bg_sky.src = "scrolling_background_sky.png";
bg_sky.onload= loaded_one_ressource;
var bg_near = new Image();
bg_near.src = "scrolling_background_foreground.png";
bg_near.onload= loaded_one_ressource;