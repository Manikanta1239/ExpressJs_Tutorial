import express from 'express' 

const app = express();

const PORT = 3000;

app.get('/', (req, res)=> {
    res.send('Hello Express')
});

//users/name/id
app.get('/things/:name/:id', (req, res) => {
    const {name, id} = req.params
    res.json({
        id,
        name
    })
})

//users/name/id-only-5-digit-number
app.get('/things/:name/:id([0-9]{5})', (req, res) => {
    const {name, id} = req.params
    res.json({
        id,
        name
    })
})

//catch-all invalid routes like /things/name/123
app.get('*', (req, res) => {
    res.send('Invalid route')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
