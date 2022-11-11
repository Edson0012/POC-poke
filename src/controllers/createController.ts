import { Request, Response } from "express";
import { poke } from "../protocols/createJob";
import * as createRepository from "../repositories/createRepository"

export async function postCreatePokeFunction(req: Request, res: Response) {
    const create = req.body;
    try{

        if(!create){
            return res.sendStatus(404);
        }

        const {rows: verifyNameExist}  = await createRepository.verifyPokeName(create);

        console.log(verifyNameExist)
        if(verifyNameExist[0]){
            return res.status(409).send('nome do pokemno ja existe')
        }

        createRepository.insertPoke(create); 

       return res.status(200).send('poke inserido');
    }catch(err){
        console.log(err)
       return res.status(500).send('error no servidor')
    }
}

export async function getListTypesPoke(req: Request, res: Response) {
    try{

        const { rows: result } = await createRepository.typeList();
        console.log(result)
        return res.status(200).send(result)
    }catch(err){
        console.log(err)
        return res.status(500).send('error no servidor')
    }
}