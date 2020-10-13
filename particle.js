class Particle{
    constructor(x,y,r){
        
        var options ={
            isStatic :false,
            restitution:0.4,
        }

        this.r = r;

        this.body = Bodies.circle(x,y,this.r/2,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body)
       
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        console.log("Hello")
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}