const Request = require('../models').Request;

const constants = require('../constants');

const createRequest = (req, res) => {
    console.log("HEYYYY")
    console.log(req.body)
    Request.create(req.body)
    .then(newRequest => {
        res.status(constants.SUCCESS).json(newRequest)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}


module.exports = {
    createRequest
}