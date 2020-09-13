const { json } = require('express');
const express = require('express');
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

const connectionString = 'mongodb+srv://swati:swati12345@cluster0.ztulf.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('Library');
        const authorCollection = db.collection('Author');
        const bookCollection = db.collection('Book');

        app.use(cors());

        app.listen(3000, function () {
            console.log('listening on 3000')
        });

        app.use(bodyParser.json());

        app.use(bodyParser.urlencoded({ extended: true }));

        // Get all author names
        app.get('/api/authors', (req, res) => {
            const allAuthors = authorCollection.find().toArray()
                .then(results => {
                    return res.json(results);
                })
                .catch(error => console.error(error));
        });

        // Get author by id
        app.get(`/api/authors/:id`, (req, res) => {
            var query = { _id: ObjectId(req.params.id.toString()) };
            const author = authorCollection.findOne(query)
                .then(results => {
                    return res.json(results);
                })
                .catch(error => console.error(error));
        });

        // Get author by id --> NOT WORKING
        app.get(`/api/authors/:id/books`, (req, res) => {
            var query = { Author: ObjectId(req.params.id.toString()) };
            console.log(query);
            const author = bookCollection.find(query).toArray()
                .then(results => {
                    return res.json(results);
                })
                .catch(error => console.error(error));
        });

        // Add a new author
        app.post('/api/authors', (req, res) => {
            authorCollection.insertOne(req.body)
                .then(result => {
                    return res.json(result);
                })
                .catch(error => console.error(error))
        });


        // Update an existing author
        app.put('/api/authors/:id', (req, res) => {
            authorCollection.findOneAndUpdate(
                { _id: ObjectId(req.params.id.toString()) },
                {
                    $set: {
                        Name: req.body.Name,
                        Biography: req.body.Biography,
                        Photograph: req.body.Photograph,
                        Email: req.body.Email
                    }
                }
            )
                .then(result => {
                    return res.json(result);
                })
                .catch(error => console.error(error))
        });

        // delete author
        app.delete('/api/authors', (req, res) => {
            var id = req.query.id;
            authorCollection.deleteOne({ _id: mongodb.ObjectID(id) }, (err, result) => {
                if (err) return console.log(err)
                if (res) return res.json(result);
            })
        });

        /**Books API Start Here */

        // Get all books
        app.get('/api/books', (req, res) => {
            console.log('all authoors')
            const allAuthors = bookCollection.aggregate([
                {
                    $lookup:
                    {
                        from: 'Author',
                        localField: 'Author',
                        foreignField: '_id',
                        as: 'AuthorList'
                    }
                }
            ]).toArray().then(
                results => {
                    console.log(results);
                    return res.json(results);
                }
            )
                .catch(error => console.error(error));
        });

        app.get(`/api/booksbyAuthor/:authorId`, (req, res) => {
            var query = { Author: ObjectId(req.params.authorId.toString()) };
            const book = bookCollection.find(query).toArray()
                .then(results => {
                    return res.json(results);
                })
                .catch(error => console.error(error));
        });

        // Get book by id
        app.get(`/api/books/:id`, (req, res) => {
            var query = { _id: ObjectId(req.params.id.toString()) };
            const book = bookCollection.findOne(query)
                .then(results => {
                    return res.json(results);
                })
                .catch(error => console.error(error));
        });

        // Add a new book
        app.post('/api/books', (req, res) => {
            req.body.Author = ObjectId(req.body.Author);
            bookCollection.insertOne(req.body)
                .then(result => {
                    return res.json(result);
                })
                .catch(error => console.error(error))
        });

        // Update an existing book
        app.put('/api/authors/:id', (req, res) => {
            authorCollection.findOneAndUpdate(
                { _id: ObjectId(req.params.id.toString()) },
                {
                    $set: {
                        Title: req.body.Title,
                        Poster: req.body.Poster,
                        Author: ObjectId(req.body.Author),
                        Price: req.body.Price,
                        Rating: req.body.Rating
                    }
                }
            )
                .then(result => {
                    return res.json(result);
                })
                .catch(error => console.error(error))
        });

        // delete author
        app.delete('/api/books', (req, res) => {
            var id = req.query.id;
            bookCollection.deleteOne({ _id: mongodb.ObjectID(id) }, (err, result) => {
                if (err) return console.log(err)
                if (res) return res.json(result);
            })
        });
    })
    .catch(error => console.error(error));