import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { comodidadesSchema, fotosSchema, hospedagemSchema } from "../schemas/hospedagem.schemas.js";
import { createHospedagem, getComodidadesHospedagemById, getFotoHospedagemById, getHospedagem, getHospedagemById, getHospedagemByLocal, insertComodidadesHospedagemById, insertFotoHospedagemById } from "../controllers/hospedagem.controllers.js";

const hospedagemRouters = Router();

hospedagemRouters.post("/hospedagens", validateSchema(hospedagemSchema), createHospedagem);
hospedagemRouters.get("/hospedagens", getHospedagem);
hospedagemRouters.get("/hospedagens/:id", getHospedagemById);
hospedagemRouters.get("/localidade", getHospedagemByLocal);

hospedagemRouters.post("/hospedagens/fotos/:id", validateSchema(fotosSchema), insertFotoHospedagemById);
hospedagemRouters.get("/hospedagens/fotos/:id", getFotoHospedagemById);

hospedagemRouters.post("/hospedagens/comodidades/:id", validateSchema(comodidadesSchema), insertComodidadesHospedagemById);
hospedagemRouters.get("/hospedagens/comodidades/:id", getComodidadesHospedagemById)


export default hospedagemRouters;