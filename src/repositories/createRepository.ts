import { connection } from "../database/database";
import { QueryResult } from "pg";
import { poke } from "../protocols/createJob";

async function insertPoke(create: poke) {
    return await connection.query(`
    INSERT INTO pokemon (name, weight, "typeId") VALUES ($1, $2, $3);
    `,[create.name, create.weight, create.typeId])
}

async function verifyPokeName(create: poke): Promise<QueryResult<poke>> {
    return  await connection.query(`SELECT pokemon.name FROM pokemon WHERE pokemon.name = $1;`,[create.name])
}

async function typeList (){
    return await connection.query(`SELECT * FROM types;`)
}

export {
    insertPoke,
    verifyPokeName,
    typeList
}