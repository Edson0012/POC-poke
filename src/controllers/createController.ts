import { Request, Response } from "express";

export async function postCreatePokeFunction(req: Request, res: Response) {
    const poke = req.body;
    try{

       return res.status(200).send(poke);
    }catch(err){
        console.log(err)
       return res.status(500).send('server error')
    }
}