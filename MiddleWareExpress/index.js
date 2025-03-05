import express from 'express' 
const app = express();

const PORT = 3000;

app.use('/welcome',(req, res, next) => {
    console.log('Middleware 1'+Date.now());
    next();
});

app.get('/', (req, res)=> {
    res.send('Hello Express')
});

app.get('/welcome',(req,res)=>{
    res.send('Welcome to ExpressJs')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
