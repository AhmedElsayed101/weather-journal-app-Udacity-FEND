// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const PORT = process.env.PORT || 8800

function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${PORT}`);
}


app.listen(PORT, listening);

app.get('/getData', (req, res) => {
    res.send(projectData)
})

app.post('/create', (req, res) => {
    
    const data  = req.body

    projectData = {
        'temperature' : data.main.temp,
        'date' : data.date,
        'feelings' : data.feelings
    }
    res.end()
})
