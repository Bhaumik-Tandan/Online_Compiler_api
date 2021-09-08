//Create a new file and write the content to it
const fs = require("fs");
const CreateFile = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

CreateFile("./src/Utils/script1.py", `print("Hello World") `);
