import Joi from "joi"

export const hospedagemSchema = Joi.object({
    localHospedagem: Joi.string().max(100).required(),
    precoHospedagem: Joi.number().precision(2).required(),
    descricaoHospedagem: Joi.string().max(100).required()
});

export const fotosSchema = Joi.object({
    url: Joi.string().uri().required()
});

export const comodidadesSchema = Joi.object({
    comodidade: Joi.string().max(100).required()
});