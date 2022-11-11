type poke = {
    name: string,
    typeId: number,
    weight: number,
}

type poketype = Omit<poke, "typeId" | "weight">

export {
    poke,
    poketype
}