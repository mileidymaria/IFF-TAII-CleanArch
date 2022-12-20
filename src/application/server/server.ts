import express, { Express, Request, Response } from 'express';
import { BattleController } from '../api/controller/battle-controller';
import { IBattleController } from '../api/controller/battle-controller.interface';
import { PokemonController } from '../api/controller/pokemon-controller';
import { IPokemonController } from '../api/controller/pokemon-controller.interface';
import bodyParser from 'body-parser';

export class Server{

    private pokemonController: IPokemonController;
    private battleController: IBattleController;

    constructor(){
        this.init();
        this.pokemonController = new PokemonController();
        this.battleController = new BattleController();
    }

    private init(){
        const app: Express = express();
        const port = process.env.PORT;
        
        app.use(bodyParser.json()); 

        app.get('/pokemons', (req: Request, res: Response) => {
            res.status(200).send(this.pokemonController.listAll());
        });

        app.post('/battle', (req: Request, res: Response) => {
            const { pokemonOne, pokemonTwo } = req.body;
            res.status(200)
                .send(this.battleController.battle(pokemonOne, pokemonTwo));
        });
        
        app.listen(3000, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:3000`);
        });
    }

}



