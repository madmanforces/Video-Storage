import  express  from "express";
import { 
    edit, 
    see, 
    logout,
    startGithubLogin,
    finishGithubLogin,
} from "../controllers/userController";

const usersRouter = express.Router();


usersRouter.get("/edit", edit);
usersRouter.get("/logout", logout);
usersRouter.get("/github/start", startGithubLogin);
usersRouter.get("/github/finish", finishGithubLogin);
usersRouter.get("/id", see);


export default usersRouter;