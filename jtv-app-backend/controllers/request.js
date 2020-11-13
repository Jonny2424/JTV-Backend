// const Post = require('../models').Post;
const Request = require('../models').Request;

const constants = require('../constants');

const getAll = (req, res) => {
    Request.findAll()
        .then(requests => {
            res.status(constants.SUCCESS).json(requests)
        })
        .catch(err => {
            res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        })
}

const deleteRequest = (req, res) => {
    console.log(req)
    console.log(typeof (req.params.requestId))
    Request.findByPk(req.params.requestId)
        .then(() => {
            Request.destroy({
                where: { id: req.params.requestId }
            })
                .then(() => {
                    res.status(constants.SUCCESS).send('success')
                })
        })
        .catch(err => {
            res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        })
}

// const getRequestById = (req, res) => {
//     let sort = 'DESC';
//     if(req.query.sorted === 'asc')
//         sort = 'ASC';

//     Request.findByPk(req.params.request, {
//         include: [
//             {
//                 model: Post,
//                 attributes: ['id', 'title', 'body', 'img'],

//             }
//         ],
//         order: [
//             [{model: Post}, 'createdAt', sort]
//         ]
//     })
//     .then(foundCity => {
//         if(foundCity === null){
//             res.status(constants.BAD_REQUEST).send('ERROR: Incorrect City Id')
//         }else{
//             res.status(constants.SUCCESS).json(foundCity)
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

module.exports = {
    getAll,
    deleteRequest
    // getRequestById
}