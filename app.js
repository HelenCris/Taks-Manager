const express = require('express');
const res = require('express/lib/response');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config()


//middleware
app.use(express.json());


//routes
app.get('/hello', (req, res) => {
    res.send("Task Manager");
});

app.use('/api/v1/tasks', tasks);

const port = 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }
}

start()

