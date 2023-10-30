class Button{
    // defines some variables for the buttons

    constructor(text,xPos,yPos,width,height){
        this.text= text;
        this.xPos = xPos;
        this.yPos= yPos;
        this.width= width;
        this.height = height;
        
    }

clicked= false;
onClick= function(){};

    display(){
        // drawing the button and text
        rect(this.xPos, this.yPos, this.width, this.height);
        textAlign(CENTER,CENTER);
        text(this.text, this.xPos + this.width/2 ,this.yPos + this.height/2 );

        // checks if the button is clicked
         if(mouseIsPressed && !this.clicked){
            if(this.mousePos()){
                this.clicked = true;
                this.onClick();
                
                
               

            }else if(!mouseIsPressed){
                this.clicked = false;
                
            }
            

        }
        
    }

    mousePos(){
        if(mouseX > this.xPos && mouseX < this.xPos + this.width &&
            mouseY> this.yPos && mouseY < this.yPos + this.height){
            return true;
    }
      return false;
}
}
