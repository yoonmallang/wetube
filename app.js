//nodemon을 사용하면 서버를 껐다켰다 안하고 그때그때 바로 새로고침 해준다.

import express from "express"; //node 모듈을 어디선가 가져온다
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

// function handleListening() {
//   console.log(`Listening on port : http://localhost:${PORT}`);
// }

// function handleProfile(req, res) { //같은 함수 선언인데 다른 표현 이러한 형식을 arrow function 이라고 한다
//   res.send("You are on my profile");
// }
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev")); // 일어나는 모든 일들을 logging

app.use(helmet()); //보안 증가

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// /user에 접속하면 전체를 사용하겠다라는 의미
export default app;
// M odel  'data'
// V iew   how does the data 'look'
// C ontroller  'function' that looks for the data
