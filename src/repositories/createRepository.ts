import { connection } from "../database/database";
import { QueryResult } from "pg";
import { poke, poketype } from "../protocols/createJob";

async function insertPoke(create: poke) {
    connection.query(`
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
    return  connection.query(`SELECT pokemon.name FROM pokemon WHERE pokemon.id = $1;`, [id])
}

async function deletePoke(id: number){
    connection.query(`DELETE FROM pokemon WHERE pokemon.id = $1`, [id])
}

async function updatePokeCreate(id: number, poke: poke){
    connection.query(`UPDATE pokemon SET name = $1, weight = $2, "typeId" = $3 WHERE pokemon.id = $4;`,
    [poke.name, poke.weight, poke.typeId, id])
}

async function pokeMaxWeight(): Promise<QueryResult<poke>>{
    return connection.query(`SELECT pokemon.name, MAX(weight) as weight, types.name as type FROM pokemon
    JOIN types ON pokemon."typeId" = types.id
    GROUP BY pokemon.id, types.id
    ORDER BY pokemon.weight DESC
    ;`)
}

export {
    insertPoke,
    verifyPokeName,
    typeList,
    verifyPokeExist,
    deletePoke,
    updatePokeCreate,
    pokeMaxWeight
}