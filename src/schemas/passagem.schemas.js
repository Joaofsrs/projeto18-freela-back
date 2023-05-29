import Joi from "joi"

export const passagemSchema = Joi.object({
    destino: Joi.string().max(100).required(),
    origem: Joi.string().max(100).required(),
    companhia: Joi.string().max(100).required(),
    horarioPartida: Joi.string().max(100).required(),
    horarioChegada: Joi.string().max(100).required(),
    precoPassagem: Joi.number().precision(2).required(),
    urlFoto: Joi.string().uri().required()
});