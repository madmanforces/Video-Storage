import express from "express";
import { watch, edit, upload, deletevideo } from "../controllers/videoController";
const videoRouter = express.Router();


videoRouter.get("/:id", watch);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deletevideo);
videoRouter.get("/upload", upload);


export default videoRouter;