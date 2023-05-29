import { Router } from "express";
import viagensRouters from "./viagens.routes.js";
import hospedagemRouters from "./hospedagem.routes.js";

const router = Router();

router.use(viagensRouters);
router.use(hospedagemRouters);

export default router;