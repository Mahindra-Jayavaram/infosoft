const express = require('express');

const connect = require('./configs/db');
const cors = require("cors")

const moviesController = require("./controllers/movies.controller")

const { register, login } = require("./controllers/auth.controller")

const app = express();
app.use(cors())

app.use(express.json());

app.use("/movies",moviesController);
app.use("/movies/:id",moviesController);

app.post("/register", register);

app.post("/login", login);

//Admin Credintials:-
//email :- mahindrajayavaram@gmail.com
//Password :- mahi123
//Admin Token:- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJfaWQiOiI2MmQxMjdmNjhkOGFhYTdiNDY4NzgyYjkiLCJlbWFpbCI6Im1haGluZHJhamF5YXZhcmFtQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JFpsbWN4VllkVWpvTGIyM2RRc0xsY092RGx1akNoYXk5MnNSdWlNVk9NTkRxWDA3MFRLcUouIn0sImlhdCI6MTY1Nzg3NTA2N30.M6KYH8Dp8tCGtKvNboHJ2EJxvMZqB3S-bmNRbarvXUg

app.listen(process.env.PORT || 1342, async () => {
    try{
        await connect();
        console.log('Listening on Port 1342');
    }
    catch(err)
    {
        console.log(err.message);
    }
});