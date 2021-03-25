const { Book, author } = require ('../models')
const Sequelize = require("sequelize");
const { where } = require("sequelize");
const Op = Sequelize.Op;

exports.addBook = async (req,res,next) =>{
    const { authorId,Title,ReleaseYear,Description } = req.body
    try {
        const saveBook = await Book.create({ authorId,Title,ReleaseYear,Description })
        if (saveBook) res.send({message:"success"})
    } catch (e) {
        next (e)
    }
}
exports.getBooks = async (req,res,next) => {
    const query = req.params
    try {
        switch (query.params) {
            case 'Show':
                var options = {
                    paginate: 20,
                    include:{
                        model : author,
                        attributes : ['Name','Age','Description']
                    }
                }
                break
            case 'Page':
                var options = {
                    paginate: 20,
                    include:{
                        model : author,
                        attributes : ['Name','Age','Description']
                    }
                }
            break
            case 'SortBy':
                var options = {
                    paginate: 20,
                    include:{
                        model : author,
                        attributes : ['Name','Age','Description']
                    },
                    order: [['Title', 'ASC']]
                }
                break
            case 'OrderBy':
                var options = {
                    paginate: 20,
                    include:{
                        model : author,
                        attributes : ['Name','Age','Description']
                    },
                    order: [['ReleaseYear','DESC']]
                }
                break
            default:
                res.status(400).json({
                    message: "bad request"
                })
                break
        }
        const { docs, pages, total } = await Book.paginate(options)
        res.status(200).json({
            status: 'success',
            total_data: total,
            total_pages: pages,
            books: docs,
          })

    } catch (e) {
        next(e)
    }
}
exports.getAll = async (req,res,next) => {
    let { Show, Page, SortBy, OrderBy } = req.body
    try {
        if ( Show === "" ) Show = 20
        if ( Page === "" ) Page = 1
        if ( SortBy !== 'Title' || 'ReleaseYear') SortBy = 'ReleaseYear'
        if ( OrderBy !== 'ASC' || 'DESC') OrderBy = 'ASC'
        var options = {
            Page,
            paginate: Show,
            order : [[SortBy,OrderBy]],
            include:{
                model : author,
                attributes : ['Name','Age','Description']
            }
        }
        const { docs, pages, total } = await Book.paginate(options)
        if (Page > pages) {
            res.status(404).json({
                message: "page not found"
            })
        } else {
            res.status(200).json({
                status: 'success',
                total_data: total,
                total_pages: pages,
                books: docs,
              })
        }
    } catch (e) {
        next(e)
    }
}
exports.searchBook = async (req,res,next) => {
    const {keyword} = req.query
    try {
        var options = {
            paginate: 4,
            order: [['id', 'DESC']],
            where: { 
                Title: {
                    [Op.iLike]: "%" + keyword + "%",
                  }},
            attributes: ["id", "Title", "ReleaseYear", "Description"],
            include: {
                model: author,
                attributes: ["Name","Age","Description"],
              },
        }
        const { docs, pages, total } = await Book.paginate(options)
        res.status(200).json({
            status: 'success',
            total_data: total,
            total_pages: pages,
            books: docs,
          })

    } catch (e) {
        next(e)
    }
}