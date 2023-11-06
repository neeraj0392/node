const MongoClient = require('mongodb').MongoClient;


async function connectToDatabase() {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017/");
    return client;
}

module.exports = connectToDatabase;
