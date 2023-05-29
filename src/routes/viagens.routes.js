import { Router } from "express";
import { getPassagem, getPassagemById, inserePassagem } from "../controllers/passagem.controllers.js";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { passagemSchema } from "../schemas/passagem.schemas.js";

const viagensRouters = Router();

viagensRouters.post("/viagens", validateSchema(passagemSchema), inserePassagem);
viagensRouters.get("/viagens", getPassagem);
viagensRouters.get("/viagens/:id", getPassagemById);

export default viagensRouters;