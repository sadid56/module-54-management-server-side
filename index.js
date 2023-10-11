const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

//midlewar
app.use(cors());
app.use(express.json())

const users = [
    {id:1, name:'shabana', email: 'shabana@gmail.com'},
    {id:1, name:'shabana', email: 'shabana@gmail.com'},
    {id:1, name:'shabana', email: 'shabana@gmail.com'}
]

app.get('/', (req, res)=>{
    res.send('User management server sunninggggg')
});
app.get('/users', (req, res)=>{
    res.send(users)
});

app.post('/users', (req, res)=>{
    // console.log('post api hitting');
    // console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})