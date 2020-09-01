<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <input type="text" id='id' placeholder="Id"/><br/>
    <input type="text" id='name' placeholder="Author Name"/><br/>
    <input type="text" id='biography' placeholder="Add"/><br/>

    <input type="button" value='Add' onclick="addAuthor()" />


    <ul id="authors">

    </ul>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src='author.js'></script>
    <script src='authormanager.js'></script>
    <script src='authorwebapp.js'></script>
    


    
</body>
</html>