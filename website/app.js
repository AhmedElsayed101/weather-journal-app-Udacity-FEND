/* Global Variables */

// const { features } = require("process");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = '&appid=51dbf2ec10d4b44d5e48ec7af05f9ccd'
// const url = `api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`
const url = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";


// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
// Inside that callback function call your async GET request with the parameters:
// base url
// user entered zip code (see input in html with id zip)
// personal API key

const getTheWeather = async (url) => {
   
    let projectData = {}
    await fetch(url)
    .then(
        (res) =>  res.json()  
    )
    .then((data) => {
        // console.log('data', data)
        projectData = data
    })
    .catch(
        (err) => {console.log('err', err)}
    )
    return projectData
}


const createData =  (url, data = {}) => {
    fetch(
            url,
            {
                method: 'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(data)
        })
        .then(() => {console.log('succedded!')})
        .catch((err) => {console.log('err', err)})
}


const generateData =  () => {

    let userData = {}
    const feelings = document.getElementById('feelings').value;
    const zipCode = document.getElementById('zip').value;

    fetch(`${url}${zipCode}${apiKey}`)
    .then((res) => {
        console.log('resWeather', res)
        return res.json()
    })
    .then((data) => {
        console.log('data', data)
        userData = data
        userData.feelings = feelings
        userData.date= newDate
        console.log('userDate', userData)
    })
    .then (() => {
        createData('/create', userData)
    })
    .then( () => {
        
        const projectData =   getTheWeather('/getData')
        projectData.then((data) => {
            console.log('data', data)
            document.getElementById('date').innerHTML = data.date
            document.getElementById('temp').innerHTML = data.temperature
            document.getElementById('content').innerHTML = data.feelings
        })
    })
    .catch ((err) => {
        console.log('err', err)
    })


}

document.getElementById('generate').addEventListener('click', generateData);