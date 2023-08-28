import express from 'express';
const routes = express.Router();
import ownersControllerOBJ from '../Controllers/owners.controller.js';

routes.get("/getowners", ownersControllerOBJ.getOwnersData);
routes.post("/makeowners", ownersControllerOBJ.makeOwnersData);
routes.put("/updateowners", ownersControllerOBJ.updateOwnerData);
routes.delete("/deleteowners/:owner_id", ownersControllerOBJ.deleteOwnerData);

export default routes;