import express from 'express';
import {usernameController, searchController} from './controller1.js';
const app = express();

const PORT = 3000;

app.get('/', (req, res)=> {
    res.send('Hello Express')
});

app.get('/user/:username',usernameController)

app.get('/search',searchController)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


