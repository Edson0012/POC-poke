import Joi from "joi";

const pokeSchema = Joi.object({
    name: Joi.string().required(),
    weight: Joi.number().required(),
    typeId: Joi.number().required()
});

export {
    pokeSchema
}