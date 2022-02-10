import express from "express";
import garbageRouter from "./router/garbageRouter.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));

app.use("/garbage", garbageRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
