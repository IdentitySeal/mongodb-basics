// created 'interns' collection in IdentitySeal database

// created a client to mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, {
    useUnifiedTopology: true
}, function(err, db) {
    if (err) throw err;
    //use identitySeal db
    dbo = db.db("IdentitySeal");

    //Created a collection "myMovies"
    dbo.collection("myMovies").find({}, {
        projection: { _id: 0, movie: 1 }
    }).toArray(function(err, result) {
        if (err) throw err;
        //console.log the find() method result 
        console.log(result);
        //close connection to database after interns collection has been created
        db.close();
    });
});
// { movie: "The Banker" }, { rating: 7 },{ projection: { _id: 0, movie: 1 }