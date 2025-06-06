import { addNewPlayer, getAllPlayers } from "../controllers/playerController";

const routes = (app) => {
    app.route('/players')
    .post(addNewPlayer)
    .get(getAllPlayers)
}

 

export default routes 