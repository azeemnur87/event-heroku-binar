const jwt = require('jsonwebtoken')
const joi = require('joi')

const tokenMiddleware = {
    verifyToken : async (req, res, next) => {
        const token = req.headers.authorization
        console.log(token)

        const schema = joi.object({
            authorization : joi.string().required()
            })
          .options({ abortEarly: false })
      
          const validate = await schema.validate({authorization : token})
      
          if(validate.error) {
            res.send({
              status: 500,
              message: 'missing token',
              data: validate.error.details
            })
          }
        
        const decodedToken = await jwt.verify(token, 'secret_key')
        req.body.decodedToken = decodedToken
        console.log(decodedToken)
        next()
    }
}

module.exports = tokenMiddleware