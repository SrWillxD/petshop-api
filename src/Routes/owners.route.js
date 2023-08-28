import express from 'express';
const routes = express.Router();
import ownersControllerOBJ from '../Controllers/owners.controller.js';

routes.get("/getowners", ownersControllerOBJ.getOwnersData);
routes.post("/makeowners", ownersControllerOBJ.makeOwnersData);

export default routes;