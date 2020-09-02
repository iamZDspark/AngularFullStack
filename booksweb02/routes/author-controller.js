const AuthorService = require("../services/author-service");
const Author=require('../entities/author');
const AuthorRepository=require('../repositories/author-repository');



let authorRepository=new AuthorRepository();

async function seed(){
    //check if the current repostiory has some data
    let authors= await authorRepository.getAll();

    //if repository is empty, then fill some dummy data
    if(authors.length===0){
        console.log('seeding default data set');
        authors=[
            new Author('vivek-dutta-mishra','Vivek Dutta Mishra','Author of the Amazon Best Seller The Accursed God','vivek.jpg','vivek@conceptarchitect.in'),
            new Author('jeffrey-archer','Jeffrey Archer','Contemporary best-seller fiction author','archer.jpg','jeffrey.archer@gmail.com'),
            new Author('ramdhari-singh-dinkar','Ramdhari Singh Dinkar','The National poet of India','dinker.jpg')
        ];
        authorRepository.authors=authors;
        await authorRepository.save(); 
    }
}

//seed();

// authorService.add(new Author('vivek-dutta-mishra','Vivek Dutta Mishra','Author of the Amazon Best Seller The Accursed God','vivek.png','vivek@conceptarchitect.in'));
// authorService.add(new Author('jeffrey-archer','Jeffrey Archer','Contemporary best-seller fiction author','archer.png','jeffrey.archer@gmail.com'));
// authorService.add(new Author('ramdhari-singh-dinkar','Ramdhari Singh Dinkar','The National poet of India','dinker.png'));

var authorService=new AuthorService(authorRepository);

//express calls user logic
// for url --> /authors
async function  getAuthorList(request,response){
    
    //user logic to get the user data
    var authors=await authorService.getAll();
    //expres asks a VIEW ENGINE to create and send HTML response
    await response.render('authors/list', {authors:authors});
}


async function  showAuthorForm(request,response){

    var author={};
    await response.render('authors/create', {author:author});

}

async function addAuthor(request,response){
    var author=request.body;
    try{
    await authorService.add(author);
    await response.redirect('/authors');
    }catch(e){
        console.log(e.message);
    }
}

async function showAuthorDetails(request,response){

    let id= request.params.authorId; //this should be the last part of url /authors/details/:authorId

    let author=await authorService.getById(id);

    await response.render('authors/details',{author});

};

async function removeAuthor(request,response){
    let id=request.params.authorId;
    await authorService.remove(id);
    await response.redirect('/authors'); //send back to author page
}



var express = require('express');
const { render } = require("ejs");
var router = express.Router();

//all this will be mapped /authors/
router.get('/', getAuthorList);
router.get('/create', showAuthorForm);
router.post('/create', addAuthor);

//:authorId indicates it is a variable
//router will automatically add the value to request.params
router.get('/details/:authorId', showAuthorDetails);
router.get('/delete/:authorId', removeAuthor);



module.exports = router;




