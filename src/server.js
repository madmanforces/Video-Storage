import express from "express";
import morgan from "morgan";
const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);
//이곳부터 express와 관련된 코드를 작성//

//router//
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const usersRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

usersRouter.get("edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("watch", handleWatchVideo);


app.use("/",globalRouter );
app.use("/vidoes", videoRouter);
app.use("/users", usersRouter);



const home = (req,res) => {
    return res.send("hello");
};

const login = (req,res) => {
    return res.send("login");
};
app.get(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`Server listning on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)

