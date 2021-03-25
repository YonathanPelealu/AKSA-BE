const {author} = require ('../models')

exports.addAuthor = async (req,res,next) => {
    const {Name, Age, Description} = req.body
    try {
        const save = await author.create({Name, Age, Description})
        if (save) res.send({message:'success'})
    } catch (e) {
        next(e)
    }
}
exports.getAllAuthor = async (req,res,next) => {
    try {
        const find = await author.findAll()
        if (find) res.send(find)
    } catch (e) {
        next(e)
    }
}