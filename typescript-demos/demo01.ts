console.log(`hello world, today is ${new Date().toLocaleDateString()}`);


class Point{
    
    private x; //typescript style
    private  y;

    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    toString(){
        return `Point(${this.x},${this.y})`;
    }
}

