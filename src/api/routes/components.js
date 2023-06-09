import { Router } from "express";
const router = Router();

import {
  getComponent,
  getComponents,
  createComponent,
  updateComponent,
  deleteComponent,
  count,
} from "../controllers/components.controller.js";

router.get("/components", getComponents);

router.get("/components/:id", getComponent);

router.post("/components", createComponent);

router.put("/components/:id", updateComponent);

router.delete("/components/:id", deleteComponent);

export default router;
