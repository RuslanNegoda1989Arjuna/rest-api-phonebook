const Joi = require("joi");
const { HttpError } = require("../helpers");

module.exports = {
   contactValidation: (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net', 'ua']},
        }).required(),
        phone: Joi.string().required(),
        favorite: Joi.boolean(),
    });

    const {error} = schema.validate(req.body);
    if (error) {
        throw HttpError(400, error.message);
    }
    next();
   },

   putContactValidation: (req, res, next) => {
      const schema = Joi.object({
          name: Joi.string(),
          email: Joi.string()
            .email({
              minDomainSegments: 2,
              tlds: { allow: ["com", "net", "ua"] },
            }),
          phone: Joi.string(),
          favorite: Joi.boolean(),
        });

    const {error} = schema.validate(req.body);
    if (error) {
        throw HttpError(400, error.message);
    }
        next();
  },
   
   patchFavoriteValidation: (req, res, next) => {
      const schema = Joi.object({
         favorite: Joi.boolean().required()
        });

    const {error} = schema.validate(req.body);
    if (error) {
        throw HttpError(400, error.message);
    }
        next();
  }
}

