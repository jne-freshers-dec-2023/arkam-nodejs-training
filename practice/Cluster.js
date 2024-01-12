const express = require('express')

const cluster = require('cluster')
const os = require('os')



const totalCPU = os.cpus().length;


if(cluster.isPrimary)
{
    for(let i = 0; i < totalCPU; i++)
    {
        cluster.fork();
    }
}
else
{
    const app = express()
    app.listen(2020)

    app.get('/',(req,res)=>
    {
        res.json(`hello from ${process.pid}`)
    })
 
    console.log(process.pid)

}
