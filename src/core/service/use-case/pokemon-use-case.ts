import { PokemonRepository } from "../../../infra/adapter/pokemon-repository-adapter";
import { IPokemonRepository } from "../../../infra/adapter/pokemon-repository-adapter.interface";

export class PokemonUseCase{
    private pokemonRepository: IPokemonRepository;
    
    constructor () {
        this.pokemonRepository = new PokemonRepository()
    }

    listAll(){
        return this.pokemonRepository.listAll();
    }
}