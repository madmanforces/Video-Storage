require("dotenv").config();
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "../src/routers/rootRouter";
import userRouter from "../src/routers/userRouter";
import videoRouter from "../src/routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");
//이곳부터 express와 관련된 코드를 작성//

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true}));



app.use(
    session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
})
);


//router//
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/",rootRouter );
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
