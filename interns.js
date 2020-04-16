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
    var dbo = db.db("IdentitySeal");
    var myMoviesObject = [{
        movie: "The Banker",
        year: "2020",
        rating: 8
    }, {
        movie: "Bad Boys",
        year: "2020",
        rating: 7
    }, {
        movie: "The Hunt",
        year: "2020",
        rating: 7
    }, {
        movie: "Bloodshot",
        year: "2020",
        rating: 7.5
    }, {
        movie: "First Cow",
        year: "2020",
        rating: 6.5
    }];
    // Establish connection to db
    //create a collection name
    dbo.collection("myMovies").insertMany(myMoviesObject, function(err, result) {
        if (err) throw err;

        // console.log(myMoviesObject);
        console.log(result.ops);

        //close connection to database after interns collection has been created
        db.close();
    });
});