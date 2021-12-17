const express = require('express');
const cors = require('cors');
require('dotenv').config();

const homeRouter = require('./api/routes/home.router');

const app = express();

const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL;
const corsOptions = {
    origin : FRONTEND_URL
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/home', homeRouter);

//Listen the request
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});