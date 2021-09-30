import  express  from "express";
import { edit, remove } from "../controllers/userController";

const usersRouter = express.Router();



usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);

export default usersRouter;