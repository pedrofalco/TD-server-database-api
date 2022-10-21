//IMPORTAR EXPRESS Y NEDB
const express = require('express');
const Datastore = require('nedb');

//EXPRESS
const app = express();
const server = app.listen(1111, () => console.log('listening @ 1111 --> http://localhost:1111'));
app.use(express.json({
    limit: '10mb'
}));

//NEDB
const database = new Datastore('database.db');
database.loadDatabase();

//POST API ENDPOINT
app.post('/api', (request, response) => {

    //REQUEST
    const data = request.body;
    const txt = JSON.stringify(data.message);
    console.log(`post message: ${txt}`);

    //PROCESS
    database.insert(data);

    //RESPONSE
    response.json(data);
});

//GET API ENDPOINT
app.get('/api', (request, response) => {
    //DATABASE QUERY
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});