var Author ={

Id:1,
Name:"swati",
Biography:"female",
Birthdate:"",
Email:"Swatbhagtani178@gmail.com",
PhotographUrl:"adgfcgc",
Book: new Array(),
};
var Book1 = {

    Id:1,
    Title:"Wings of Fire",
    CoverPageUrl:"khhjj",
    Author:"APJ Abdul Kalam",
    Price:900,
    Rating:5,
    
    };
    
    var Book2= {
    
        Id:2,
        Title:"Andha Yug",
        CoverPageUrl:"khhjj",
        Author:"Dharamvir Bharati",
        Price:800,
        Rating:4,
        
        };

Author.Book.push(Book1);
Author.Book.push(Book2);
//console.log(Author);

var Authors= new Array();

var AuthorManagerObject={

addAuthor: function(newAuthor){
    Authors.push(newAuthor);
},

    getAllAuthors: function(){
        console.log(Authors);
    },
    getAuthorById: function(Id) {
        for (var i = 0; i < Authors.length; i++) {
            if(Authors[i].Id==Id){
                console.log(Authors[i]);


            }
            }
          },
          
          searchByName: function(name) {
            for (var i = 0; i < Authors.length; i++) {
                if(Authors[i].Name==name){
                    console.log(Authors[i]);
    
    
                }
            }
              
    },
    deleteAuthor: function(newAuthor){
        Authors.pop(newAuthor);
    },
    updateAuthorDetails: function(id,name){
        for (var i = 0; i < Authors.length; i++) {
            if(Authors[i].Id==id){
                Authors[i].Name=name;
                


            }

        }
    },

    searchByBookWritten: function(title) {
        for (var i = 0; i < Authors.length; i++) {

            for(var j= 0; j < Author[i].Book.length; j++){

                if(Authors[i].Book[j].Title==title){
                    console.log(Authors[i]);
    
    
                }

            }
            
        }
          
},

    
    
};
var abc= {
    Id:2,
Name:"swati2",
Biography:"female",
Birthdate:"",
Email:"Swatbhagtani178@gmail.com",
PhotographUrl:"adgfcgc",
Book: new Array(),

};
AuthorManagerObject.addAuthor(Author);
AuthorManagerObject.addAuthor(abc);
AuthorManagerObject.getAllAuthors();
//AuthorManagerObject.getAuthorById(3);
//AuthorManagerObject.searchByName("swati");
//AuthorManagerObject.deleteAuthor(abc);
//AuthorManagerObject.updateAuthorDetails(2,"swati3");
//AuthorManagerObject.getAllAuthors();
//AuthorManagerObject.searchByBookWritten("Wings of Fire");



var BookManager={
    AddBook: function(){
    console.log();
},
getAllBooks: function() {
    console.log();
},
GeTBookById: function() {
    console.log();
},
GetBookByAuthor: function(){
    console.log();
},
SearchOnTitle: function() {
    console.log();
},
SearchInPriceRange: function() {
    console.log();
},
SearchInReviewRange: function(){
    console.log();
},
DeleteBook: function(){
    console.log();
},
UpdateBook: function(){
    console.log();
}
};



