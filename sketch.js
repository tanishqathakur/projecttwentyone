    var canvas;
    var music;
    var fixsprite1,fixsprite2,fixsprite3,fixsprite4;
    var movingsprite,Edges;
    function preload(){
        music = loadSound("music.mp3");
    }


    function setup(){
        canvas = createCanvas(800,600);

        //create 4 different surfaces
    fixsprite1=createSprite(0,580,360,30);
    fixsprite1.shapeColor="blue";

    fixsprite2=createSprite(295,580,200,30);
   fixsprite2.shapeColor="yellow";

    fixsprite3=createSprite(515,580,200,30);
    fixsprite3.shapeColor="red";

    fixsprite4=createSprite(740,580,200,30);
     fixsprite4.shapeColor="green";

        //create box sprite and give velocity
    movingsprite=createSprite(random(10,750),300,20,20);
    movingsprite.shapeColor="white";
    movingsprite.velocityX=3;
    movingsprite.velocityY=3;
    }

    function draw() {
        background(rgb(169,169,169));
      Edges=createEdgeSprites()
      movingsprite.bounceOff(Edges) 
        if(movingsprite.isTouching(fixsprite1)&&movingsprite.bounceOff(fixsprite1)){
    music.play()
    movingsprite.shapeColor="blue";
        }
         if(movingsprite.isTouching(fixsprite3)&&movingsprite.bounceOff(fixsprite3)){
    movingsprite.shapeColor="yellow";
        }
         if(movingsprite.isTouching(fixsprite4)&&movingsprite.bounceOff(fixsprite4)){
            movingsprite.shapeColor="pink";    
        }
        else if(movingsprite.isTouching(fixsprite2)){
            music.stop()
            movingsprite.shapeColor="green";
           movingsprite.velocityX=0;
           movingsprite.velocityY=0; 
        }
        
                
    
    
    drawSprites()  
    }
