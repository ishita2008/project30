const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11
var block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25
var base1,base2
var slingshot
var polygon
var backgroundImage

function preload(){
    backgroundImage=loadImage("background.jpg")
}


function setup(){
    
    createCanvas(1200,900);
   
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,850,1200,20)
    base1=new Ground(500,790,150,12)
    block1=new Block(500,700,20,50)
    block2=new Block(480,710,20,30)
    block3=new Block(520,710,20,30)
    block4=new Block(480,740,20,30)
    block5=new Block(500,740,20,30)
    block6=new Block(520,740,20,30)
    block7=new Block(460,768,20,30)
    block8=new Block(480,768,20,30)
    block9=new Block(500,768,20,30)
    block10=new Block(520,768,20,30)
    block11=new Block(540,768,20,30)

    block12=new Block(800,600,20,40)
    block13=new Block(820,635,20,30)
    block14=new Block(780,635,20,30)
    block15=new Block(800,635,20,30)
    block16=new Block(760,662,20,30)
    block17=new Block(780,662,20,30)
    block18=new Block(800,662,20,30)
    block19=new Block(820,662,20,30)
    block20=new Block(840,662,20,30)
    block21=new Block(740,690,20,30)
    block22=new Block(760,690,20,30)
    block23=new Block(780,690,20,30)
    block24=new Block(800,690,20,30)
    block25=new Block(820,690,20,30)
    block26=new Block(840,690,20,30)
    block27=new Block(860,690,20,30)

    base2=new Ground(800,710,160,10)



    polygon=new Polygon(100,800,20,20)

    slingshot=new Slingshot(polygon.body,{x:100, y:800})

  

    


}
function draw(){
    Engine.update(engine);
    background(backgroundImage)
    textSize(40)
    stroke("black")
    fill(0);
    text("drag the hexagon to release it to launch it towards the blocks",100,400)

   
    
    


     
    ground.display();
    base1.display();
    stroke("white")
    fill("yellow")
    block1.display();
    block2.display();
    block3.display();
    fill("purple")
    block4.display();
    block5.display();
    
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    fill("pink")
    
    
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    fill("blue")
    block16.display();
    block17.display();
    block18.display();
    
    block19.display();
    block20.display();
    fill("turquoise")
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    
    block26.display();
    block27.display();
    base2.display();
    slingshot.display();
   polygon.display();

  
   
   
   
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
