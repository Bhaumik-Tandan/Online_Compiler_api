const { spawn } = require("child_process");
var dataToSend;

// C , C++ , Java, Ruby, Php , Node, Python3 , Go
const RunFile = (cmd, fileName) => {
  //const compile = spawn("g++", [`${fileName}`, " && ", `./a.out`]);
  const compile = spawn("python", [`${fileName}`]);
  compile.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
    console.log(dataToSend);
  });
  compile.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });
};

RunFile("", "dummy.cpp");
