import { BattleUseCase } from "../../../core/service/use-case/battle-use-case";
import { PokeSnippet } from "../../../common/snippets/pokemon-snippet";
import { Response } from "../../../common/dto/response";
import { IBattleController } from "./battle-controller.interface";

export class BattleController implements IBattleController{

    battleUseCase: BattleUseCase; 

    constructor(){
        this.battleUseCase = new BattleUseCase();
    }

    battle = async (pokemonOne: PokeSnippet, pokemonTwo: PokeSnippet) => {
        const battleReport = await this.battleUseCase.battle(pokemonOne, pokemonTwo);
        return new Response(200, JSON.stringify(battleReport));;
    }
}