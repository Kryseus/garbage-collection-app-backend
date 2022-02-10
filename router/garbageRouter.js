import { Router } from "express";
//import express from 'express';
import { getAll, getSingle } from "../Controllers/garbageController.js";

const garbageRouter = Router();
//const garbageRouter = express.Router();

garbageRouter.get("/", getAll);
garbageRouter.get("/:id", getSingle);

export default garbageRouter;
