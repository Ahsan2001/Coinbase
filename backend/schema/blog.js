const Joi = require("joi");


const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;


const createBlogSchema =  Joi.object ({
    title: Joi.string().required(),
    author: Joi.string().regex(mongodbIdPattern).required(),
    content: Joi.string().required(),
    photo: Joi.string().required(),

})

module.exports = createBlogSchema;