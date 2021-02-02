import express from "express";
import routes from "../routes";

import {
  changePassowrd,
  editProfile,
  userDetail,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassowrd);
userRouter.get(routes.userDetail(), userDetail);
export default userRouter;
