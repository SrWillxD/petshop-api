import express from 'express';
const routes = express.Router();
import animalsControllerOBJ from "../Controllers/animals.controller.js";

routes.get("/getanimals", animalsControllerOBJ.getAnimalsData);
routes.post("/makeanimals", animalsControllerOBJ.makeAnimalsData);
routes.put("/updateanimals", animalsControllerOBJ.updateAnimalsData);

export default routes;