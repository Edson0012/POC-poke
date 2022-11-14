import { Request, Response } from "express";
import { poke } from "../protocols/createJob";
import * as createRepository from "../repositories/createRepository"

export async function postCreatePokeFunction(req: Request, res: Response) {
    const create = req.body as poke;
    try{

        if(!create){
            return res.sendStatus(404);
        }

        const {rows: verifyNameExist}  = await createRepository.verifyPokeName(create);

        if(verifyNameExist[0]){
            return res.status(409).send('pokémon name already exists')
        }

        await createRepository.insertPoke(create); 

       return res.status(201).send('pokémon created');
    }catch(err){
        console.log(err)
       return res.status(500).send('server error')
    }
}

export async function getListTypesPoke(req: Request, res: Response) {

    try{

        const { rows: result } = await createRepository.typeList();

        return res.status(200).send(result)
    }catch(err){
        console.log(err)
        return res.status(500).send('server error')
    }
}


export async function deletePokeCreate(req: Request, res: Response) {
    const { id } = req.params;

    try{

        if(!id){
            return res.status(404).send('required parameter')
        }

        const {rows: verifyPokeId} = await createRepository.verifyPokeExist(Number(id));

        if(!verifyPokeId[0]){
            return res.status(404).send('pokémon not exist')
        }

        await createRepository.deletePoke(Number(id));

        return res.sendStatus(204);
    }catch(err){
        console.log(err)
        return res.status(500).send('server error')
    }

}

export async function updatePoke(req: Request, res: Response) {
    const { id } = req.params;
    const poke = req.body as poke;
    try{

        if(!id){
            return res.status(404).send('required parameter')
        }

        const {rows: pokeExist} = await createRepository.verifyPokeExist(Number(id));

        if(!pokeExist[0]){
            return res.status(404).send('pokémon not exist')
        }

        await createRepository.updatePokeCreate(Number(id), poke)

        return res.sendStatus(200);
    }catch(err){
        console.log(err)
        return res.status(500).send('server error')
    }
}

export async function getPokeMaxWeight( req: Request, res: Response){
    
    try{

        const {rows: result} = await createRepository.pokeMaxWeight();

        return res.status(200).send(result);
    }catch(err){
        console.log(err)
        return res.status(500).send('server error')
    }
}