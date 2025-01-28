const express = require('express')

const port = process.env.port || 3001;

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1> This is the main heading with express framework of node js </h1>')
});

app.get('/api', (req, res) => {
    const data = { message: "API response", status: "success" };
    res.send(data);
  });

  app.get('/error', (req, res) => {
    res.status(404).send('<h1 align = "center"> Page Not Found! </h1>');
  });

  
app.listen(port, ()=>{
    console.log("Server is listening on port: " + port);
})
