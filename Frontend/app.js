
let a = 5;
class Box{

    constructor(name,l,b){
        this.name = name
        this.l = l
         this.b = b
      
    }
    area(a){
        let area  =  this.l*this.l
        console.log(`area of box ${this.name}: ${area}`);
    }
   
}
class Square extends Box{
    constructor(a){
       super("square",a,a)//parent class constructor has been called 
    }
    area(a){
        let area  =  this.l**2
        console.log(`area of square  ${area}`)
    }
    
}
class Rectangle extends Box{
    constructor(l,b){
        super(`Rectangle of area`, l,b)
    }
  
    area(a){
        let area = this.l*this.b
        console.log(`area of rectangle${area}`)
        return a;
    }
}
let sq1 = new Square(4);
let sq2 = new Rectangle(5,6)
sq1.area()
sq2.area()
