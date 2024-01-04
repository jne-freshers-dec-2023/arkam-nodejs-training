let arr =[{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  }]

//   {
//     "userId": 1,
//     "id": 4,
//     "title": "et porro tempora",
//     "completed": true,
//     userIdAndId: "14"
//   }
// const mapMethod = arr.map((item)=>
// {
//    return {...item, userIdAndId: `${item.userId}${item.id}`}
// })

// console.log(mapMethod)

// const filterMethod = arr.filter((item)=>
// {
//    return false
// })

// console.log("Filtered ",filterMethod);

arr.forEach((item)=>
{
    item['userIdAndId']=`${item.userId}${item.id}`
})
console.log(arr)