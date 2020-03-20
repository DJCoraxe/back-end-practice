'use strict'

const express = require('express')
const app = express();

const students = require('./routes/students');

app.use(express.json());
app.set('port', process.event.port || 8080);

app.use('/students', students)

app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`))