const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://b022210264:password1234@cluster0.jhu1dfv.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.post('/register', (req, res) => {
    
        client.db("BENR2423").collection("users").insertOne(
            {
                "username": req.body.username,
                "password": req.body.password
            }
            );

            res.send('register successfully')
        })


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