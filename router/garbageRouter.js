import { Router } from "express";
//import express from 'express';
import { getAll, getListOfStreets, getSingle } from "../Controllers/garbageController.js";

const garbageRouter = Router();
//const garbageRouter = express.Router();

garbageRouter.get("/", getAll);
garbageRouter.get("/streets", getListOfStreets);
garbageRouter.get("/streets/:id/schedule", getSingle);

export default garbageRouter;
