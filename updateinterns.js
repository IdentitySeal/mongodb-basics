// created 'interns' collection in IdentitySeal database

// created a client to mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//make
MongoClient.connect(url, {
    useUnifiedTopology: true
}, function(err, db) {
    if (err) throw err;
    //use identitySeal db
    dbo = db.db("IdentitySeal");

    var myQuery = {
        movie: "The Banker"
    }
    var newValues = {
        $set: {
            movie: "Black Widow",
            year: "2020",
            rating: 3.5
        }
    }
    dbo.collection("myMovies").updateOne(myQuery, newValues, function(err, result) {
        if (err) throw err;
        // console.log(result[0])
        console.log(result);
        //close connection to database after interns collection has been created
        db.close();
    });
});
// { movie: "The Banker" }, { rating: 7 },{ projection: { _id: 0, movie: 1 }