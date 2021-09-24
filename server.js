const express = require('express');
const bodyParser = require('body-parser');
const {getCodeObject} = require("./createObjFromJson");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/', async (req, res)=>
{
  const run_var= getCodeObject(req.body);
  await  run_var.run_file();

  if(!run_var.error)
  res.status(201).json({"error":run_var.error,"output":run_var.output});

  else
  res.status(401).json({"error":run_var.error,"output":run_var.output});

});

app.listen(port, () => {
  console.log(`APP listening at http://localhost:${port}`)
})