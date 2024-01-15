const Post = require('../Models/post')

exports.getPosts = (req,res, next)=>
{
    res.status(200).json(
    {
     posts:[{number: 9130272873},{number: 9130272873}]   
    })
};

exports.createPost = (req,res,next)=>
{

    const title = req.body.title
    const content = req.body.content

    const post = new Post({
      title:title,
      content: content,
      creator: {name: 'Maximilian'}
    })
    post.save().then((res)=>
    {
      console.log(res);

      res.status(201).json({
        massage:"Post created successfully!!",
        post:res
      }) 
    }).catch(err)
    {
      console.log(err);
    }
    
    

}
