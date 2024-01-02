exports.getPosts = (req,res, next)=>
{
    res.status(200).json(
    {
     posts:[{number: 9130272873},{number: 9130272873}]   
    })
};

exports.createPost = (req,res,next)=>
{
    console.log("Hello")
    const title = req.body.title
    const content = req.body.content
    res.status(201).json({
    massage:"Post created successfully!!",
    post:{id:new Date().toISOString,title:title, content: content}
  })  
}
