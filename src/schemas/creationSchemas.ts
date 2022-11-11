import Joi from "joi";

const pokeSchema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    weight: Joi.number().required(),
});

export {
    pokeSchema
}