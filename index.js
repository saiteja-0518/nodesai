const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const userRoute = require('./routers/userrouters'); 


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const MongoDbUrl = "mongodb+srv://saiteja:sai123@cluster0.dfrqz.mongodb.net/";
mongoose.connect(MongoDbUrl).then(() => {
    console.log('DB connected');
}).catch((er) => {
    console.log(er);
})

app.use('/', userRoute);

app.get('/get-user-data', (req, res) => {  
    res.send('Data get success');
});


app.listen(1000,()=>{
    console.log("1000 port server is launch");
})