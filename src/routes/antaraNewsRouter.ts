import express, { Request, Response } from "express";
import { antaraNewsRssFeedModel } from "../models/antaraNewsModel";

const antaraNewsRouter = express.Router();


antaraNewsRouter.get('/terkini', async (_req: Request, res: Response) => {
    const data = await antaraNewsRssFeedModel();
    return res.status(data.status).json(data);
})

export { antaraNewsRouter };
