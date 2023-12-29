const { json } = require('body-parser')
const fs = require('fs')

fs.readFile('jsn.json','utf-8',(err,data)=>{
    if(err)
    {
        console.log('Error Occured')
        return
    }
    const jsonData = JSON.parse(data)

    console.log(jsonData)
})

