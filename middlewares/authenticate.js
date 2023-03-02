
cosnt jwt = require('jsonwebtoken');
const { HttpError } = require("../helpers");

const authenticate = (req, res, next) => {
    const { authorization = ''} = req.headers;
    const [bearer, token] = authorization.split(" ")
    if (bearer !== "Bearer") {
        next(HttpError(401))
    }

    try {
        const {id} = jwt.verify(token, )
    } catch  {
        
    }
    
}

module.exports = authenticate;