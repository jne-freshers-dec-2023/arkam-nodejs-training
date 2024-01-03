const fs = require('fs');

fs.readFile('Demo2.txt',(err,data)=>
{
    if(err)
    {
        console.error("File not created ",err)
        return
    }
})

