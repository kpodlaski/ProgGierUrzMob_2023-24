class GameObject{

    constructor(image, x, y, vx, vy,anim_frames, poses, pose, anim_delay){
        this.image = image;
        this.x = x;
        this.y = y;
        this.vx =vx;
        this.vy=vy;
        this.anim_frames = anim_frames;
        this.width = this.image.width/anim_frames;
        this.height = this.image.height/poses;
        this.actual_frame = 0;
        this.actual_pose = pose; 
        this.anim_delay = anim_delay;
        this.inner_frame = 0;
        this.lastX = x;
        this.lastY = y; 
        console.log("obj",image);
    }

    drawOnScreen(context,clear=false){
        if (clear) context.clearRect(this.lastX,this.lastY,this.width, this.height);
        context.drawImage(
            this.image,
            this.actual_frame*this.width, this.actual_pose*this.height,
            this.width, this.height, 
            this.x,this.y, 
            this.width, this.height);
    }

    move(){
        this.inner_frame= (this.inner_frame + 1)%this.anim_delay;
        if (this.inner_frame==0) {
            this.actual_frame= (this.actual_frame+1)%this.anim_frames;
            this.lastX = this.x;
            this.lastY = this.lastY;
            this.x+=this.vx;
            this.y+=this.vy;
        }
        
    }

    reverseVX(){
        this.vx=-this.vx;
    }
    
    reverseVY(){
        this.vy=-this.vy;
    }

}