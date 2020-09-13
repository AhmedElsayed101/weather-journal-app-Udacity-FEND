# Weather-Journal App Project

## Overview
#### This project is an asynchronous web app that uses Web API and user data to dynamically update the UI using OpenWeatherMap API. 
#### This is a Udacity front-end nano-degree project.
#### This project mainly is to practice back end technologies based on javascript like node-js and express-js.

## Pre-requisites and Local Development

Developers using this project should already have node and npm installed on their local machines.

From the base directory run:

```
    npm install
```
## To run the server 

```
    node server.js
```
## Endpoints

### GET '/getData'

#### Payload 

```
    None
```
#### Response

```json

    {
        "temperature" :  60.5,
        "date" : "8.13.2020",
        "feelings" : "That's a cold day"
    }

```
### POST '/create'

#### Payload 

```json
    {
        "temperature" :  58.6,
        "date" : "8.13.2020",
        "feelings" : "That's a cold day"
    }
```
#### Response

```json

    None 

```

### There is no error handling and those end points are mainly accessible from the web home page.