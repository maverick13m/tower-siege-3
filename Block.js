class Box{
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      isStatic:false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visibility = 255
  }
  display(){
    if(this.body.speed<3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      pop()
    }
        
    else{
      World.remove(world,this.body)
      push()
      this.visibility -= 2
      tint (255,this.visibility)
          //image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
    }  
  }
  
  score(){
    if(this.visibility<0 && this.visibility >-105){
      score++;

    }     
  }
}