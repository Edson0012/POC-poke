import { Router } from "express";
import { postCreatePokeFunction } from "../controllers/createController";
import { validateSchema } from "../middleware/validateSchema";
import { pokeSchema } from "../schemas/creationSchemas";

const router = Router();

router.post('/poke', validateSchema(pokeSchema), postCreatePokeFunction );

export default router;