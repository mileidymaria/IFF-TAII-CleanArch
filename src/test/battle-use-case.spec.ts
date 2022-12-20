//@ts-ignore
import { assert } from 'chai';
import { PokeSnippet } from '../common/snippets/pokemon-snippet';
import { BattleUseCase } from '../core/service/use-case/battle-use-case';

const pokemonOne: PokeSnippet = {
    pokeId: "123e4567-e89b-12d3-a456-426614174000",
    pokeName: "pikachu",
    attack: 2000,
    defense: 10000
}

const pokemonTwo: PokeSnippet = {
    "pokeId": "123e4567-e89b-12d3-a456-526614174000",
    "pokeName": "charmander",
    "attack": 3000,
    "defense": 12000
}

describe("Battle Use Case", () =>{

    const battleUseCase = new BattleUseCase();

    it("Given two pokemon, the second pokemon should win", () =>{
        const expectedWinnerId = "123e4567-e89b-12d3-a456-526614174000";
        battleUseCase.battle(pokemonOne, pokemonTwo).then((res) => {
            //chai.assert.equal(res.winnerId, expectedWinnerId);
            assert.equal(res.winnerId, expectedWinnerId);
        });
    });
})

