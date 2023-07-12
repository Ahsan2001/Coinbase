const Joi = require("joi");


const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;

const createBlogSchema =  Joi.object ({
    title: Joi.string().required(),
    author: Joi.string().regex(mongodbIdPattern).required(),
    content: Joi.string().required(),
    photo: Joi.string().required(),
})


const getByIdSchema = Joi.object ( {
    id: Joi.string().regex(mongodbIdPattern).required()
})

module.exports = {
    createBlogSchema,
    getByIdSchema
};