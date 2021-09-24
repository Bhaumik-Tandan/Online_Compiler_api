const code=require("./code_runner/code.js").Code;


function getCodeObject(obj)
{
    return new code(obj.code,obj.lang,obj.fn,obj.args);
};

module.exports = { getCodeObject};