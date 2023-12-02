const Joi = require('joi');

function Validate(xabar, method) {
    const sxema1 = Joi.object({
        date: Joi.string().min(3).max(50).required(),
        type: Joi.string().min(3).max(70).required(),
        iddevice: Joi.number().required()
    });
    const sxema2 = Joi.object({
        name: Joi.string().min(3).max(50),
        token: Joi.string().min(3).max(70),
        iddevice: Joi.number()
    });

    if (method == 'add')
        return sxema1.validate(xabar);


    return sxema2.validate(xabar);
}

module.exports = Validate;