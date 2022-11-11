import { connection } from "../database/database";
import { QueryResult } from "pg";
import { poke, poketype } from "../protocols/createJob";

async function insertPoke(create: poke) {
    await connection.query(`
    INSERT INTO pokemon (name, weight, "typeId") VALUES ($1, $2, $3);
    `,[create.name, create.weight, create.typeId])
};

async function verifyPokeName(create: poke): Promise<QueryResult<poke>> {
    return  await connection.query(`SELECT pokemon.name FROM pokemon WHERE pokemon.name = $1;`,[create.name])
}

async function typeList (): Promise<QueryResult<poketype>>{
    return await connection.query(`SELECT * FROM types;`)
}

async function verifyPokeExist(id: number): Promise<QueryResult<poketype>>{
    return await connection.query(`SELECT pokemon.name FROM pokemon WHERE pokemon.id = $1;`, [id])
}

async function deletePoke(id: number){
    await connection.query(`DELETE FROM pokemon WHERE pokemon.id = $1`, [id])
}

export {
    insertPoke,
    verifyPokeName,
    typeList,
    verifyPokeExist,
    deletePoke
}