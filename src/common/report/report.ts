import { PokeSnippet } from "../snippets/pokemon-snippet";
import Moment from 'moment';
import {v4 as Uuid} from 'uuid';

export class Report{
    id: string;
    pokeOne: PokeSnippet;
    pokeTwo: PokeSnippet;
    winnerId: string;
    happenedAt: string;

    constructor(pokeOne: PokeSnippet, pokeTwo: PokeSnippet, winnerId: string){
        this.pokeOne = pokeOne;
        this.pokeTwo = pokeTwo;
        this.winnerId = winnerId;
        this.id = Uuid();
        this.happenedAt = Moment().format();
    }

    getBattleDescription() {
        return `
        Pokemon ${this.pokeOne.pokeName} and Pokemon ${this.pokeTwo.pokeName} faced each other in a battle at ${this.happenedAt}. The winner was ${
            this.winnerId == this.pokeOne.pokeId ? this.pokeOne.pokeName : this.pokeTwo.pokeName 
        }. The report was saved to database!
        `
    }
}