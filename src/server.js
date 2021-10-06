import "./db";
import express from "express";
import morgan from "morgan";
import globalRouter from "../routers/globalRouter";
import usersRouter from "../routers/userRouter";
import videoRouter from "../routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);
//이곳부터 express와 관련된 코드를 작성//

//router//
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true}));
app.use("/",globalRouter );
app.use("/users", usersRouter);
app.use("/videos", videoRouter);

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

