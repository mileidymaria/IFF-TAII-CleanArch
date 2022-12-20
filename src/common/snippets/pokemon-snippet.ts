import { Pokemon } from "../dto/pokemon-dto";

export type PokeSnippet = Pick<Pokemon, "pokeId" | "pokeName" | "attack" | "defense"> ;