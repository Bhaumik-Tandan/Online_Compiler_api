const code=require("./code_runner/code.js").Code;


function getCodeObject(obj)
{
    return new code(obj.code,obj.lang,obj.args,obj.fn);
};

module.exports = { getCodeObject};