import express, { Express, Request, Response } from 'express';
import { PokemonController } from '../api/controller/pokemon-controller';
import { IPokemonController } from '../api/controller/pokemon-controller.interface';

export class Server{

    private pokemonController: IPokemonController;

    constructor(){
        this.init();
        this.pokemonController = new PokemonController();
    }

    private init(){
        const app: Express = express();
        const port = process.env.PORT;
        
        app.get('/pokemons', (req: Request, res: Response) => {
            res.send(this.pokemonController.listAll());
        });
        
        app.listen(3000, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:3000`);
        });
    }

}



