import express from 'express';
import { getAllUser, login, signup } from '../controllers/user-controller';

const userRoute = express.Router();
userRoute.get("/",getAllUser);
userRoute.post("/signup",signup);
userRoute.post("/login", login);
export default userRoute;