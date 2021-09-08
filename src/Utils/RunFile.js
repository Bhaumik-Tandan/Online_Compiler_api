const { spawn } = require("child_process");
var dataToSend;

// C , C++ , Java, Ruby, Php , Node, Python3 , Go
const python = spawn("python", ["script1.py"]);
python.stdout.on("data", function (data) {
  console.log("Pipe data from python script ...");
  dataToSend = data.toString();
  console.log(dataToSend);
});
python.on("close", (code) => {
  console.log(`child process close all stdio with code ${code}`);
});
