const { author } = require ('../models')

exports.addAuthor = async (req,res,next) => {
  const { Name, Age, Description } = req.body
  try {
    const save = await author.create({ Name, Age, Description })
    if (save) res.send({ message:'success' })
  } catch (e) {
    next(e)
  }
}