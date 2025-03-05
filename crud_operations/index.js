import express from 'express' 
const app = express();

const PORT = 3001;

app.use(express.json());

//define a simple route
app.get('/', (req, res)=> {
    res.send('Hello Express')
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    res.json({
        message: `User with id ${userId} is fetched successfully`
    })
})

app.post('/users', express.json(), (req, res) => {
    const {name, email} = req.body
    res.json({
        message: `Hello ${name}, your email is ${email} is created successfully`
    })
})

app.put('/users/:id', express.json(), (req, res) => {
    // const {id} = req.params
    const userId = req.params.id
    const {name, email} = req.body
    res.json({
        message: `User with id ${id} is updated successfully`
    })
})

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id
    res.json({
        message: `User with id ${userId} is deleted successfully`
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

