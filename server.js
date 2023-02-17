const express = require("express")
const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://AugustineLove:stephens03@cluster0.1qgu7j2.mongodb.net/?retryWrites=true&w=majority"
const User = require('./model/studentModel');
const bodyParser = require('body-parser')
const server = express()


server.use(bodyParser.json());

//Get user data from database
server.get('/user', async (req, res) => {
    try{
        const user = await User.find();
        res.send(user);
    }catch (error) {
        res.send(error);
    }
});
//Get user data from database using user id
server.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id});
        if(!user){
            return res.send(user);                
        }
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

//Add user information to database
server.post("/add", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

//Running application at localhost:2000
server.listen(2000, function (){
    console.log("Server is running on 2000")
    mongoose.connect(DB_URL).then(
        function(){
            console.log("Database is connected")
        }
    ).
    catch(
        function(){
            console.log("Database connecting error!")
        }
    )
    
    
})






