const code=require("../code_runner/code.js").Code;

const l=`
public class test
{
    public static void main(String args[])
    {
        System.out.println("dsf");
    }
}
`;
a = new code(l,"java");
async function fun()
{
    await a.run_file();
    console.log(a.output);
    console.log(a.error)
}
fun();
