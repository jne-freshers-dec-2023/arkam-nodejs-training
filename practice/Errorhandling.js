try
{
    console.log("inside try")
    let a = 10;
    a = a + b;
}
catch(error)
{
 console.log("inside catch");
 console.log("Error is: ",error);
}
finally
{
    console.log("Inside Finally");
}