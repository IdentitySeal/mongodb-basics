// created 'interns' collection in IdentitySeal database

// created a client to mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//make
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    //use identitySeal db
    var dbo = db.db("IdentitySeal");

    // Establish connection to db
    //create a collection name
    dbo.createCollection("interns", function(err, res) {
        if (err) throw err;
        console.log("Interns collection created!");
        //close connection to database after interns collection has been created
        db.close();
    });
});