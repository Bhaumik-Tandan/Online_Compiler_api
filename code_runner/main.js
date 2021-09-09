class Code {
  static list = require("./settings.json");
  static fs = require("fs");
  constructor(
    code = "print('Hello World')", //default code
    lang = "py", //language
    fn = "test", //file name
    args = "" //arguments
  ) {
    this._e = 0; //shows program executed or not
    this.code = code;
    const path = require("path");
    this.fn = path.join(__dirname, fn) + "." + lang; //for platform independence
    this.run_com = Code.replace(Code.list[lang], this.fn, args);
    this._output = "Execution pending";
    this._error = "Execution pending";
  }

  file_exists() {
    return Code.fs.existsSync(`${this.fn}`);
  }

  make_file() {
    Code.fs.writeFile(`${this.fn}`, this.code, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  run_file() {
    if (!this.file_exists())  this.make_file();

    const { exec } = require("child_process");
    const r = exec(this.run_com, (error, stdout, stderr) => {
      if (error) 
      {
        this._error = stderr;
        this._output = stdout;
      }
      else if (stderr == "") {
        this._output = stdout;
        this._error = "No error";
      } else {
        this._error = stderr;
        this._output = stdout;
      }
    });
    r.on("close", () => {
      this._e = 1;
      Code.fs.unlinkSync(this.fn);
      console.log(this);//differnt
    });
    console.log(this);//differnt
  }

  get error() {
    if (this._e == 0) this.run_file();
    return this._error;
  }

  get output() {
    if (this._e == 0) this.run_file();
    return this._output;
  }

  get e() {
    return this._e;
  }

  static replace(
    s //replace {}
  ) {
    const arg = Object.values(arguments).slice(1); //convert obj to array removing s
    for (let i in arg) {
      s = s.replace("{}", arg[i]);
    }
    return s;
  }
}

module.exports.Code = Code;
// a = new Code("print('exd')");
// a.output;
