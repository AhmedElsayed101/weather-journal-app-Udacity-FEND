
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Define apiKey and url for the api
const apiKey = '&appid=51dbf2ec10d4b44d5e48ec7af05f9ccd'
const url = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";



// Function to make a GET request to the server to get the data
const getTheWeather = async (url) => {
   
    let projectData = {}
    await fetch(url)
    .then(
        (res) =>  res.json()  
    )
    .then((data) => {

        projectData = data
    })
    .catch(
        (err) => {console.log('err', err)}
    )
    return projectData
}


// Function to make a POST request to the server to create projectData
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

// To add the data to the DOM
const generateData =  () => {

    let userData = {}
    const feelings = document.getElementById('feelings').value;
    const zipCode = document.getElementById('zip').value;

    // make and get request to weather-open-map to get the weather based on zipCode
    fetch(`${url}${zipCode}${apiKey}`)
    .then((res) => {
        return res.json()
    })
    // save the data to userData global variable
    .then((data) => {

        userData.temperature = data.main.temp
        userData.feelings = feelings
        userData.date= newDate
    })
    // make a POST request to save our data in the server
    .then (() => {

        createData('/create', userData)
    })
    // make a GET request to get the data 
    .then( () => {
        
        const projectData =   getTheWeather('/getData')
        return projectData
    })
    // insert the data into the DOM
    .then((data) => {
        document.getElementById('date').innerHTML = data.date
        document.getElementById('temp').innerHTML = data.temperature
        document.getElementById('content').innerHTML = data.feelings
    })
    .catch ((err) => {
        console.log('err', err)
    })


}

// add a listener that runs when the button is clicked
document.getElementById('generate').addEventListener('click', generateData);