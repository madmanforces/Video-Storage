import  express  from "express";
import { 
    getEdit,
    postEdit, 
    see, 
    logout,
    startGithubLogin,
    finishGithubLogin,
    getChangePassword,
    postChangePassword,
} from "../controllers/userController";
import {
    protectorMiddleware,
    publicOnlyMiddleware,
    uploadFiles,
  } from "../middlewares";

const usersRouter = express.Router();



usersRouter.get("/logout", protectorMiddleware, logout);
usersRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(uploadFiles.single("avatar"), postEdit);
usersRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
usersRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);


usersRouter.get("/id", see);


export default usersRouter;