// taken from Derek O'Reily DKIT, Dundalk
var url = 'skeleton.png'

function draw_image(){
    var canva = document.getElementById("drawing_canvas");
    var ctx = canva.getContext("2d");
    ctx.clearRect(0, 0, canva.width, canva.height);
    ctx.drawImage(image,0,0,image.width, image.height, 0,0, image.width,image.height);
    console.log("--");

    var x= 20, y=50;
    var sprite_x=0, sprite_y=0; 
    for (i = 0; i<3 ; i++){
        ctx.drawImage(image, 
            sprite_x, sprite_y, f_width, f_height,
            x,300,f_width, f_height);
        x+=7*f_width;
        sprite_x+=f_width+f_border;
    } 
    animation();
}

var frame_number = 0;
var max_frames = 9;
var f_width = 576/9, f_height = 256/4, f_border =0;
var animation_seq = [0,1,2,3,4,5,6,7,8];
var step = 10;
var skeleton_pos = 20
screen_size = 600

function draw_frame(frame_number, x, y ){
    var canva = document.getElementById("drawing_canvas");
    var ctx = canva.getContext("2d");
    ctx.clearRect(x-step,y,f_width, f_height);
    sprite_x = (frame_number)*(f_width+f_border)
    ctx.drawImage(image, 
        sprite_x, 3*f_height, f_width, f_height,
        x,y,f_width, f_height);
}

function animation(){
    
    draw_frame(animation_seq[frame_number], skeleton_pos, 400);
    frame_number = (frame_number+1)%max_frames;
    if (skeleton_pos+step> 300 || skeleton_pos+step<0){
        step = -step;
    }
    skeleton_pos+=step;
    
    setTimeout(animation,300);
}

var image = new Image();
image.src = url;
image.onload = draw_image

