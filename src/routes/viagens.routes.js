import { Router } from "express";
import { getPassagem, getPassagemById, getPassagemByName, inserePassagem } from "../controllers/passagem.controllers.js";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { passagemSchema } from "../schemas/passagem.schemas.js";

const viagensRouters = Router();

viagensRouters.post("/viagens", validateSchema(passagemSchema), inserePassagem);
viagensRouters.get("/viagens", getPassagem);
viagensRouters.get("/viagens/:id", getPassagemById);
viagensRouters.get("/destino", getPassagemByName);

export default viagensRouters;