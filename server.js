const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
  try{
    let data = fs.readFileSync('index.html');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  }catch(e){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Timothee - Dev Web</h1><p>Site Termux OK</p>');
  }
}).listen(3000,()=>console.log('Serveur Termux sur http://localhost:3000'));
