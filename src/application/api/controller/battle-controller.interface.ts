import { PokeSnippet } from "../../../common/snippets/pokemon-snippet";

export interface IBattleController{
    //@ts-ignore
    battle(pokemonOne: PokeSnippet, pokemonTwo: PokeSnippet);
}