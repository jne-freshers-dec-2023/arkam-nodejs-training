const fs = require('fs')

fs.appendFile('note.txt','hello its a note',(err)=>
{
    if(err)
    {
        throw err
    }
    console.log('File saved!')
})

fs.open('note.txt','r',(err)=>
{
    if(err)
    {
        throw err
    }
    console.log('File opened!')
})

// fs.unlink('note.txt',(err)=>
// {
//     if(err)
//     {
//         throw err
//     }

//     console.log('File Deleted')
// })