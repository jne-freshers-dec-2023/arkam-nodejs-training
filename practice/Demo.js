const express = require('express');
// const bodyParaser = require('body-parser')
const app = express();
// app.use(bodyParaser.urlencoded({extended: false}));
app.use(express.json())
app.get('',(req,res)=>{
    const queryParams = req.query;
    const params = req.params
    return res.send("Hello "+queryParams.name)
    
})

app.post('/add-post',(req,res)=>
{
    const data = req.body

    return res.json(data)
})

app.listen(5000, () => {
    console.log("App is running on 5000 PORT")
})

// Array Method
// Array Method (es5)


const fun = async () => {
    var b =20;
    if(true) {
        var a = 10;
    }
    console.log(a)
    return b;
}
console.log(fun,"f")
console.log("b", fun());
fun().then((val)=>
{
 console.log(val,"val")   
})
// console.log(b)

// const newFun = new Promise(resolve, reject)
// {
//     resolve
// }

// newFun.then(xyz)
// {
//  console.log(xyz)
// }
// newFun.catch
// {

// }

const newPro = new Promise((resolve, reject) => {
    resolve("Resolved ")
})

newPro.then((data) => {
    console.log(data)
})