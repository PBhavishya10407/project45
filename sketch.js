var bus,road;

function setup()
{
    createCanvas(400,800);
    bus = createSprite(200,400,10,10);
    bus.shapeColor = "red";
    road = createSprite(200,400,400,800);
}

function draw()
{
    background(0);

    if(keyPressed(UP_ARROW))
    {
        bus.velocityY = -10;
    }
    if(keyPressed(DOWN_ARROW))
    {
        bus.velocityY = 10;
    }
    if(keyPressed(LEFT_ARROW))
    {
        bus.velocityX = -10;
    }
    if(keyPressed(RIGHT_ARROW))
    {
        bus.velocityX = 10;
    }

    drawSprites();
}