const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lb2uj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function run() {
    try {
        await client.connect();
        console.log("database connected");
    }
    finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Runnig Bike World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})