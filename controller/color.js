exports.getColorName = (req,res,next)=>
{
    res.status(200).json({
        colorName :[{color: "Purple"},{color: "Gold"}]
    }
        )
}