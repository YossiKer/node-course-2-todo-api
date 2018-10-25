const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("An error occured while connecting." , err)
    }

    console.log('connected to the db.')

    db.collection('Users').insertOne({
        name: 'Yossi Kerner',
        age: 20,
        location: "Home"
    }, (err, result) => {
        if (err) {
            return console.log("Error inserting to db.", err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    })

    db.close();
})