import express from 'express'
const app = express()

const PORT = 3000

app.get('/', (req, res)=> {
    console.log('Middleware 2')
    res.send('Hello Express')
})

app.get('/error', (req, res)=> {
    throw new Error('This is an error')
})

app.use((err,req, res, next) => {
    console.log(err.message)
    // res.status(500).send('Something went wrong')
    res.send('internal server error')
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})