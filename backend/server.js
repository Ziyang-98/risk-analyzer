const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ENV == "DEV" ?
             process.env.DB_LOCAL_URI :
             process.env.DB_CLOUD_URI;

mongoose.set("strictQuery", false);
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Require and use the files for database
const questionsRouter = require('./routes/questions/question');
const q1Router = require('./routes/questions/question1');
const q2Router = require('./routes/questions/question2');
const q3Router = require('./routes/questions/question3');
const q4Router = require('./routes/questions/question4');
const q5Router = require('./routes/questions/question5');

const usersRouter = require('./routes/users');

app.use('/questions', questionsRouter);
app.use('/question1', q1Router);
app.use('/question2', q2Router);
app.use('/question3', q3Router);
app.use('/question4', q4Router);
app.use('/question5', q5Router);

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});