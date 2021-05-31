const eventService = require('../services/eventService')

const eventController = {
    create: async (req, res) => {
        try {
          let status = 200;
          let message = 'OK';
          let data = {};
    
          const {data: eventCreated, error} = await eventService.create(req.body)
    
          res.send({
            status,
            message,
            data: eventCreated || data
          })
        } catch (error) {
          console.log(error)
          res.send({ status: 500, message: 'failed', data: error })
        }
      }
}

module.exports = eventController