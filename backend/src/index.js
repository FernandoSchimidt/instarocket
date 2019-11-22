const express = require('express');
const mongoose = require ('mongoose');
const path = require ('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
mongoose.connect('mongodb+srv://schimidt:172203@cluster0-axa2g.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true})
    .then(() => console.log("Connected to Database"))
    .catch(err => console.error("An error has occured", err
    ));

    app.use((req, res, next)=>{
        req.io = io;

        next();
    })


    app.use(cors());

app.use('/files', express.static(path.resolve(__dirname,'..','uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);
