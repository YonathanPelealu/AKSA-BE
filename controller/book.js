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
                break;
            case 'Page':
                var options = {
                    paginate: 20,
                    include:{
                        model : author,
                        attributes : ['Name','Age','Description']
                    }
                }   
            break;
            case 'SortBy':
                var options = {
                    paginate: 20,
                    include:{
                        model : author,
                        attributes : ['Name','Age','Description']
                    },
                    order: [['Title', 'ASC']]
                }   
                break;
            case 'OrderBy':
                var options = {
                    paginate: 20,
                    include:{
                        model : author,
                        attributes : ['Name','Age','Description']
                    },
                    order: [['ReleaseYear','DESC']]
                }   
                break;
            default:
                res.status(400).json({
                    message: "bad request"
                })
                break;
        }
        const { docs, pages, total } = await Book.paginate(options);
        res.status(200).json({
            status: 'success',
            total_data: total,
            total_pages: pages,
            books: docs,
          });

    } catch (e) {
        next(e)
    }
}