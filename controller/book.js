const { Book, author } = require ('../models')

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
    try {
        const { Show, Page, SortBy, OrderBy } = req.params
        if ( typeof Show || typeof Page || typeof SortBy !== 'integer') {
            res.send({message: 'Show Page And SortBy parameter must be number'})
        }
        if ( OrderBy !== 'ASC' || 'DESC') {
            res.send({message : 'invalid value of OrderBy should be ASC or DESC'})
        }
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