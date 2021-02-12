class Block{
    constructor(x,y,width,height){
       var options={
            isStatic:false
        }
        this.Visibility=255;
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.x=x;
        this.y=y;
        
        World.add(world, this.body);

     


    }
    display(){
        if(this.body.speed<3){
            
            var pos=this.body.position;
            var angle=this.body.angle;

            push();
            translate(pos.x,pos.y)
            rotate(angle)
    
            rectMode(CENTER)
            rect(0,0,this.width,this.height);

            this.Visibility=this.Visibility-5;
            tint(255,this.Visiblity);
            pop();
    
           
            

           
           

                      
        }
        else{

            World.remove(world,this.body);
            push();
            this.Visiblity=this.Visibility-5;
            pop();
            
           
         
        }
        
    }
}