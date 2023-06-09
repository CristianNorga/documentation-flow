import { getConnection } from "../database.js";
import { v4 } from "uuid";

export const getComponents = (req, res) => {
  const components = getConnection().data.components;
  res.json(components);
};

export const createComponent = async (req, res) => {
  const newComponent = {
    id: v4(),
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const db = getConnection();
    db.data.components.push(newComponent);
    await db.write();

    res.json(newComponent);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getComponent = (req, res) => {
  const componentFound = getConnection().data.components.find(
    (t) => t.id === req.params.id
  );
  if (!componentFound) res.sendStatus(404);
  res.json(componentFound);
};

export const updateComponent = async (req, res) => {
  const { name, description } = req.body;

  try {
    const db = getConnection();
    const componentFound = db.data.components.find((t) => t.id === req.params.id);
    if (!componentFound) return res.sendStatus(404);

    componentFound.name = name;
    componentFound.description = description;

    db.data.components.map((t) => (t.id === req.params.id ? componentFound : t));

    await db.write();

    res.json(componentFound);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteComponent = async (req, res) => {
  const db = getConnection();
  const componentFound = db.data.components.find((t) => t.id === req.params.id);
  if (!componentFound) res.sendStatus(404);

  const newComponents = db.data.components.filter((t) => t.id !== req.params.id);
  db.data.components = newComponents;
  await db.write();

  return res.json(componentFound);
};

export const count = async (req, res) => {
  const totalComponents = getConnection().data.components.length;
  res.json(totalComponents);
};
