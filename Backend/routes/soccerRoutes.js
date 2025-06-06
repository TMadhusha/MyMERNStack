import { 
    addNewPlayer, 
    getAllPlayers,
    getPlayerById,
 } from "../controllers/playerController";

const routes = (app) => {
    app.route('/players')
    .post(addNewPlayer)
    .get(getAllPlayers)


    app.route('/player/:PlayerId')
    .get(getPlayerById)
}

export default routes 