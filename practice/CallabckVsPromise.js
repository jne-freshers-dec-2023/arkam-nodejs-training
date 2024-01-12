function testFuntion (value, callback)
{
    for(let i = 1; i <= 10; i++)
    {
        console.log(value * i)
    }
}

testFuntion(3,(value)=>
{
   console.log(value);
})


function promiseFunction ()
{
    return new Promise((resolve, reject)=>
    {
        reject('promise reject')
    })
}

promiseFunction()
.then((response)=>
{
    console.log(response);
})
.catch((response)=>
{
    console.log(response);
})