const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

app.use(express.json());
//TODO: SHOULD MORGAN LOGS BE UPLOADED TO HEORKU OR KEPT FOR DEVELOPMENT
// app.use(morgan('combined', {stream: accessLogStream}));
const usersRoutes = require('./routes/users');

app.use(helmet());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});
app.get('/', (req, res) => {
    res.send('sanity check!')
});
app.use('/user', usersRoutes);




module.exports = app