const http = require('http')

const port = process.env.port || 3000;

const server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-type': 'text/html'})
  
  if (req.url == '/')

    res.end('<h1>This is the main page</h1>')
    
    else if (req.url == '/about')
      
    res.end('<h2>This is an about page</h2>')

    else
    res.end('<h5>This is the miscellaneous page</h5>')
    
});

server.listen(port, ()=>{
    console.log("Server is listening on port: " + port);
})