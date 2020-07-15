class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB :{x :this.offsetX,y:this.offsetY},
            
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        var anchor2X = pointB.x + this.offsetX
        var anchor2Y = pointB.y + this.offsetY
        strokeWeight(4);
        line(pointA.x,pointA.y,anchor2X,anchor2Y);
    }
}
