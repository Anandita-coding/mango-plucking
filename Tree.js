class Tree{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.image = loadImage("Plucking mangoes/tree.png")
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("green");
        image(this.image,pos.x, pos.y, this.width, this.height);
      }

}