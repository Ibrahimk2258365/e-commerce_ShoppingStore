import express from 'express';
import { postuser, getuser,checkoutController,loginController} from '../controller/user.js';

const userRouter = express.Router();
userRouter.post('/', postuser);
userRouter.post('/', checkoutController);
userRouter.get('/', getuser);
userRouter.post('/',loginController);


export default userRouter;
