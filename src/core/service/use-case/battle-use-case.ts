import { Report } from "../../../common/report/report";
import { PokeSnippet } from "../../../common/snippets/pokemon-snippet";


export class BattleUseCase{

    constructor(){

    }

    async battle (pokemonOne: PokeSnippet, pokemonTwo: PokeSnippet){
        console.log(`BATTLE STARTED:: ${pokemonOne.pokeName} X ${pokemonTwo.pokeName}`);
        let roundCount = 1;
        while((pokemonOne.defense || pokemonTwo.defense) > 0){
            pokemonOne.defense -= pokemonTwo.attack;
            pokemonTwo.defense -= pokemonOne.attack;
            console.log(`BATTLE ROUND:: ROUND ${roundCount} :: \n ${pokemonOne.pokeName} -> DEFENSE = ${pokemonOne.defense} \n ${pokemonTwo.pokeName} -> DEFENSE = ${pokemonTwo.defense}`)
            roundCount += 1;
        }

        const winnerId = pokemonOne.defense <= 0 ? pokemonTwo.pokeId : pokemonOne.pokeId;

        const battleReport = new Report(pokemonOne, pokemonTwo, winnerId);
        
        console.log(battleReport);

        return battleReport;
    }
}