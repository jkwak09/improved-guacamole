require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));

//POST https://api.linkedin.com/v2/{service}/{Request Body}
app.post('/post', (req, res) =>{
  console.log(req.body);

});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
