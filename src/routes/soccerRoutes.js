import { addnewPlayer, getPlayers, getPlayersByID, updatePlayer, deletePlayer } from "../controllers/playerController.js";

export const routes = (app) => {
    app.route('/players')
    .get(getPlayers)
    .post(addnewPlayer);

    app.route('/player/:PlayerID')
    .get(getPlayersByID)
    .put(updatePlayer)
    .delete(deletePlayer);
}