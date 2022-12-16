import { Pokemon } from "../../common/dto/pokemon-dto";
import { IPokemonRepository } from "./pokemon-repository-adapter.interface";

export class PokemonRepository implements IPokemonRepository{
    listAll(): Pokemon[] {
        return [
            new Pokemon('Charmander', 'FIRE', 2000, 3000),
            new Pokemon('Pikachu', 'ELECTRIC', 2000, 3000),
            new Pokemon('Piplup', 'GRASS', 2000, 3000)
        ];
    }
    
}