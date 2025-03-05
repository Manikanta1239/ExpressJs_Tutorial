import express from 'express'
const app = express()

const PORT = 3000

app.use((req,res,next)=>{
    console.log('Start')

    res.on('finish',()=>{
        console.log('End')
    })
    next()
})
app.get('/', (req, res)=> {
    console.log('Middleware 2')
    res.send('Hello Express')
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

