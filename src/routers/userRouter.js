import  express  from "express";
import { 
    getEdit,
    postEdit, 
    see, 
    logout,
    startGithubLogin,
    finishGithubLogin,
} from "../controllers/userController";

const usersRouter = express.Router();


usersRouter.route("/edit").get(getEdit).post(postEdit);
usersRouter.get("/logout", logout);
usersRouter.get("/github/start", startGithubLogin);
usersRouter.get("/github/finish", finishGithubLogin);
usersRouter.get("/id", see);


export default usersRouter;