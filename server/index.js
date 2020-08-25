const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname + '/../public'));

//Create
app.post('/post', (req, res) =>{
  console.log(req.body);

});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
