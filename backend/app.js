const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


const userRoute = require('./routes/userRoute');


mongoose.connect(process.env.MONGOOSE_URL, () => {
    console.log('connected');
})


app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))


app.use('/user', userRoute);
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(process.env.PORT, () => {
    console.log('server start');
})