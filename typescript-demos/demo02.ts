

let x=20;

const pi=3.141592;

console.log(`x=${x} and pi=${pi}`);


class Point2D{
    private x;
    private y;
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    toString(){
        return `Point(${this.x},${this.y})`;
    }
}