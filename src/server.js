import express from "express";
import morgan from "morgan";
import globalRouter from "../src/routers/globalRouter";
import userRouter from "../src/routers/userRouter";
import videoRouter from "../src/routers/videoRouter";

const app = express();
const logger = morgan("dev");
//이곳부터 express와 관련된 코드를 작성//

//router//
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true}));
app.use("/",globalRouter );
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
