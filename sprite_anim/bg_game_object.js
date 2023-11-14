class BgGameObject extends GameObject{

    drawOnScreen(context,clear=false){
        if (clear) context.clearRect(this.lastX,this.lastY,this.width, this.height);
        
        context.drawImage(
            this.image,
            this.actual_frame*this.width, this.actual_pose*this.height,
            this.width, this.height, 
            this.x,this.y, 
            this.width, this.height);
        
        if (this.x + this.width < 1000 ){
            context.drawImage(
                this.image,
                this.actual_frame*this.width, this.actual_pose*this.height,
                this.width, this.height, 
                this.x+this.width,this.y, 
                this.width, this.height);
        }
    }

    move(){
        super.move();
        if (this.x<=-this.width){
            console.log("change x for bgimage", this);
            this.x = this.x+this.width;
        }
    }
}