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

const editRequest = (req, res) => {
    Request.update(req.body, {
        where: {
            id: req.params.requestId
        },
        returning: true
    }).then(newRequest => {
        res.status(constants.SUCCESS).json(newRequest)
    })
}

const createRequest = (req, res) => {
    Request.create(req.body)
    .then(newRequest => {
        res.status(constants.SUCCESS).json(newRequest)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}


module.exports = {
    getAll,
    deleteRequest,
    editRequest,
    createRequest
}