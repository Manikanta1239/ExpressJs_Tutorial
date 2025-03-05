import express from 'express'
import {userLogin, userSignup} from './controller2.js';
const app = express();

const PORT = 3000;

app.get('/', (req, res)=> {
    res.send('Hello Express')
});

app.get('/user/login', userLogin)
app.get('/user/signup', userSignup)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
