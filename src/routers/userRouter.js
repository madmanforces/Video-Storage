import  express  from "express";
import { edit, remove, see, logout, login } from "../controllers/userController";

const usersRouter = express.Router();


usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);
usersRouter.get("/id", see);
usersRouter.get("/logout", logout);
usersRouter.get("/login", login);

export default usersRouter;