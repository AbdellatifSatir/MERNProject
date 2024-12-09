const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const UserModel = require('./models/Users')

// create the app
const app = express()
app.use(cors()) // access our server side in frontend
app.use(express.json()) // send json format to the backend


//connection to mongoDB
mongoose.connect("mongodb://localhost:27017/MERNProject")

// write an api to create a new record to users
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// write an api to read users
app.get('/', (req, res) => {
    UserModel.find({}) //get all records
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// write an api to read a specified user
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id}) //find user by id
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// write an api to update a specified user
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},
        {
            name: req.body.name, 
            email: req.body.email, 
            age: req.body.age
        })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// write an api to delete a specified user
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// run the server
app.listen(3001, () => {
    console.log("Server is Running")
})