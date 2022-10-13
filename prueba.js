
var http = require('http');
var fs = require('fs');
var dt = require('./models/ModDate.js');
const port = process.env.PORT || 3000;

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
console.log(dt.myDateTime());
  
// lee elcontenido del archivo demoFile.txt
http.createServer(function (req, res) {
  fs.readFile('demoFile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port);

// crea el archivo mynewfile.txt con contenido
fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

// method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file
// is opened for writing. If the file does not exist, an empty file is created:
  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });


  //method replaces the specified file and content if it exists. If the file does not exist, a new file,
  // containing the specified content, will be created:
  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


  //method deletes the specified file:
  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });


  //method renames the specified file:
  fs.rename('mynewfile3.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
  