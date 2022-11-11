import { Router } from "express";
import { getListTypesPoke, postCreatePokeFunction } from "../controllers/createController";
import { validateSchema } from "../middleware/validateSchema";
import { pokeSchema } from "../schemas/creationSchemas";

const router = Router();

router.post('/poke', validateSchema(pokeSchema), postCreatePokeFunction );
router.get('/type', getListTypesPoke)
export default router;