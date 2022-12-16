import { PokemonUseCase } from "../../../core/service/use-case/pokemon-use-case";
import { IPokemonController } from "./pokemon-controller.interface";

export class PokemonController implements IPokemonController{

    private pokemonUseCase: PokemonUseCase;
    constructor(){
        this.pokemonUseCase = new PokemonUseCase();
    }

    listAll(){
        const responseList = this.pokemonUseCase.listAll();
        return {
            statusCode: 200,
            body: {
                pokemons: responseList
            }
        }
    }

}