const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())
app.get('/', (req, res) => {
 res.send('Hello world!')
})

app.post('/login', (req, res) => {
    // check if username is correct
    if(req.body.username !='fairus'){
        return res.status(400).send('Invalid User')
    }
    //check if password is correct
    if(req.body.password !='1234'){
        return res.status(400).send('Invalid Password')
    }
    res.send('login successfully')
    })
    
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})