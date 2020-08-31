require('./config/config');
require('./models/db');

const cors = require('cors');
const express = require('express');
const app = express();

// middleware
app.use(express.json);
app.use(cors());


app.listen(process.env.PORT ,() => console.log(`Server Started On Port : ${process.env.PORT}`));