
let Author=function(id,name,biography=null,photoUrl=null,email=null){

    this.id=id;
    this.name=name;
    this.biography=biography;
    this.photoUrl=photoUrl;
    this.email=email;
    this.books=[] ; //currently and empty list of books   
}
Author.prototype.toString=function(){
    return `Author[${this.id},${this.name}]`;
};








