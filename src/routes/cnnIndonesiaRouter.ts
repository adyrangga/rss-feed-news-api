import express, { Request, Response } from "express";
import { cnnIndonesiaRssFeedModel } from "../models/cnnIndonesiaModel";

const cnnIndonesiaRouter = express.Router();


cnnIndonesiaRouter.get('/nasional', async (_req: Request, res: Response) => {
    const data = await cnnIndonesiaRssFeedModel();
    return res.status(data.status).json(data);
})

export { cnnIndonesiaRouter };
