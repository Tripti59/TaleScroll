const express = require('express');
require('dotenv').config()
const app=express();
const request = require('request');

app.use(express.json());  // body parser middleware to parse json objects in body
app.use(express.urlencoded({extended:true})); // urlencoded-like form body to act like JSON

app.get('/quotes', (req, res) => {
  request.get(
    {
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    },
    (error, response, body) => {
      if (error) {
        res.status(500).send('Request failed')
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send('Error')
      } else {
        res.send(body)
      }
    }
  )
})
app.get('/quotes/:category', (req, res) => {
//   const id = req.params;
//   console.log(id);
  const category = req.params.category;
  request.get(
    {
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    },
    (error, response, body) => {
      if (error) {
        res.status(500).send('Request failed')
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send('Error')
      } else {
        res.send(body)
      }
    }
  )
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})