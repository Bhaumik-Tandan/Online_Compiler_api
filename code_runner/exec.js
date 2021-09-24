const code=require("./main.js").Code;
a = new code("print('kuk')");
async function fun()
{
    const b=await a.run_file();
    console.log(b);
    console.log(a.output);
    console.log(a.error);
}
fun();
// while(true)
// {
//     console.log(a.output);
// }

