// const express = require('express');
import express from 'express';
const app = express();

const PORT = 3000;

//define a simple route
app.get('/', (req, res)=> {
    res.send('Hello Express')
});

//about route
app.get('/about', (req, res)=> {
    res.send('This about route Express')
});

//blog route
app.get('/blog', (req, res)=> {
    res.send('this is blog Express')
});

//contact route
app.get('/contact', (req, res)=> {
    res.send('this is contact Express')
});

//user Dynamic route
app.get('/user/:username', (req, res)=> {
    const username = req.params.username;
    res.send(`Welcome ${username} !!!...`)
});                                      // http://localhost:3000/user/Manikanta

//user query string
app.get('/search',(req,res)=>{
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`);
});                                      // http://localhost:3000/search?keyword=nodejs

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});