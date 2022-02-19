import { createRequire } from "module";

const require = createRequire(import.meta.url);
const garbageData = require("../db/Garbage.json");

export const getAll = (req, res) => res.status(200).json(garbageData);

export const getListOfStreets = (req, res) => {
  const streets = garbageData.map((entry) => ({
    id: entry.id,
    street: entry.street,
  }));
  res.status(200).json(streets);
};

export const getSingle = (req, res) => {
  const { id } = req.params;
  const garbage = garbageData.find((garbage) => garbage.id === Number(id));
  if (!garbage)
    res.status(404).json({ error: `Date with id of ${id} does not exist` });
  res.status(200).json(garbage);
};
