class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
           
        }
        this.x=x
        this.y=y 
        this.h=h
        this.w=w
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
    }
    display(){
        
  rectMode(CENTER)
  rect(this.body.position.x,this.body.position.y,this.w,this.h)
  
    }
  
  }