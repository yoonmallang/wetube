//nodemon을 사용하면 서버를 껐다켰다 안하고 그때그때 바로 새로고침 해준다.

import express from "express"; //node 모듈을 어디선가 가져온다
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on port : http://localhost:${PORT}`);

// function handleListening() {
//   console.log(`Listening on port : http://localhost:${PORT}`);
// }

function handleHome(req, res) {
  res.send("hello from sweet home");
}

const handleProfile = (req, res) => res.send("You are on my profile");
// function handleProfile(req, res) { //같은 함수 선언인데 다른 표현 이러한 형식을 arrow function 이라고 한다
//   res.send("You are on my profile");
// }

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
