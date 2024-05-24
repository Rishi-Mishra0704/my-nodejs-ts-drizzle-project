import { Router } from "express";
import { getAllUsers , createUser} from "../controllers/users";


const userRouter = Router();

userRouter.get("", getAllUsers);
userRouter.post("", createUser);

export default userRouter ;