import * as express from "express";
import { UserController } from '../app/controllers/UserController';

const router = express.Router();

router.get('/authenticateUser/:uname/:pwd', UserController.authenticateUser);

export const userRoute = router;