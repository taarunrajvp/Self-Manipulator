const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
   
    if (req.url === '/' || req.url === '/sample.html') {
        fs.readFile(path.join(__dirname, '/sample.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
                console.log()
            }
        });
    } else {
        // Handle other requests
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

