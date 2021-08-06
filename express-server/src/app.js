const express = require('express');
const cors = require('cors');
const app = express();
const processData = require('./utils/processData');

const data = {
            lastDetection: new Date(),
            parkingLots: []
        };

const user = process.env.USER;
const password = process.env.PASS;

app.use(express.json());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.log(err);
        return res.status(400)
                    .send({err: "Bad format"}); 
    }
    next();
});

app.get('/', (req, res) => {
    res.send("<h1>hello from express server!</h1>");
});

app.get('/monitor/data', cors(), (req, res) => {
    
    res.status(200)
        .send(data);
})

app.post('/data', (req, res) => {
        // const auth = Buffer.from(req.headers.authorization
        //     .split('Basic ')[1], 'base64').toString()
        //     .split(':');

        // if(auth[0] !== user || auth[1] !== password) {
        //     return res.status(401)
        //                 .send({msg: 'Unathorized'});
        // }

    try{
        const dataUpToDate = req.body;

        if(!dataUpToDate) {
            return res.status(400)
                        .send({msg: "No content was sent."});
        }
    
        const oldData = [...data.parkingLots];
        
        data.lastDetection = new Date();
        data.parkingLots = processData(oldData, dataUpToDate);
        
        
        res.status(201)
            .send(data);
    }
    catch(e) {
        res.status(400)
            .send({msg: "Bad format.", Error: e.message});
    }
})

module.exports = app;

