import { Pokemon } from "../../common/dto/pokemon-dto";

export interface IPokemonRepository{
    listAll(): Pokemon[];
}