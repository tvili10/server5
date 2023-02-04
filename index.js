const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { cwd } = require('process');
app.use(bodyParser.json());


app.use(express.static('client'));
app.listen(port, () => {
  console.log('http://localhost:3000');
});

app.post("/post", function(req, res){
    console.log("got request");
    res.json({
      status: "ok"
    })
})
