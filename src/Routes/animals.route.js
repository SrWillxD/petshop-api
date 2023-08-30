import express from 'express';
const routes = express.Router();
import animalsControllerOBJ from "../Controllers/animals.controller.js";

routes.get("/getanimals", animalsControllerOBJ.getAnimalsData);

export default routes;