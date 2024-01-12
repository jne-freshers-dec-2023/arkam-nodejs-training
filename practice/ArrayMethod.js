let priceOfFruits = 
[
    { name: "mango", value:240},
    { name: "apple", value:40},
    { name: "jackfruit", value:890},
    { name: "lemon", value:280},
    { name: "watermelon", value:20},
    { name: "orange", value:210},
    { name: "banana", value:150}
]

    // Filter Method

// let filteredArray = priceOfFruits.filter((item)=>
// {
//     return (item.value >=100)
// })

// console.log("Filtered Array: ",filteredArray)



        //map method

// let mappedArray1 = priceOfFruits.map((item)=>
// {
//     return item.name
// })
// console.log("Mapped Array: ",mappedArray1)


// let mappedArray2 = priceOfFruits.map((item)=>
// {
//     return item.value
// })
// console.log("Mapped Array: ",mappedArray2)


    //find Method

    // let findMethod = priceOfFruits.find((item)=>
    // {
    //     return item.name === "mango"
    // })
    // console.log(findMethod)


    // ForEach

// priceOfFruits.forEach((eachItem)=>
// {
//     console.log(eachItem)
// }) 


//         //some
let moreThan100 = priceOfFruits.some((item)=>
{
    return item.value > 100;
})

console.log(moreThan100)

//         //every
// let moreThan100 = priceOfFruits.every((item)=>
// {
//     return item.value > 10;
// })
// console.log(moreThan100)


///         reduce
// let total = priceOfFruits.reduce((sum,item) =>
// {
//     return sum = sum + item.value
// },0)
// console.log(total)


let arr = [ 10,20,30,40,50,60,70,80]

// includes

// let value = arr.includes(3);
// console.log(value)


// indexof

 var val = arr.indexOf(5066)
console.log(val)


//findIndex

 val = arr.findIndex((item)=>
{
    return item === 80
})
console.log(val)


// findIndex

let value = priceOfFruits.find((item)=>
{
    return item.value === 40 
})
console.log(value)

