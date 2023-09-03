import express from 'express';
const routes = express.Router();
import animalsControllerOBJ from "../Controllers/animals.controller.js";

routes.get("/getanimals", animalsControllerOBJ.getAnimalsData);
routes.post("/makeanimals", animalsControllerOBJ.makeAnimalsData);
routes.put("/updateanimals", animalsControllerOBJ.updateAnimalsData);
routes.delete("/deleteanimals/:animals_id", animalsControllerOBJ.deleteAnimalsData);
routes.get("/getanimalsbyid/:animals_id", animalsControllerOBJ.getAnimalByIdData);
routes.get("/getanimalsbyowner/:owner_id", animalsControllerOBJ.getAnimalsByOwnerData);

export default routes;
