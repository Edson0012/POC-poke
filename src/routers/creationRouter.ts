import { Router } from "express";
import { getListTypesPoke, postCreatePokeFunction, deletePokeCreate, updatePoke, getPokeMaxWeight } from "../controllers/createController";
import { validateSchema } from "../middleware/validateSchema";
import { pokeSchema } from "../schemas/creationSchemas";

const router = Router();

router.post('/poke', validateSchema(pokeSchema), postCreatePokeFunction );
router.get('/type', getListTypesPoke);
router.delete('/poke/:id',deletePokeCreate);
router.put('/poke/:id', updatePoke);
router.get('/poke' , getPokeMaxWeight);
export default router;