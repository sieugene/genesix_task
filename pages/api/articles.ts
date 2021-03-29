import { NextApiRequest, NextApiResponse } from "next";
import { ArticlesController } from "./../../controllers/ArticlesController";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    if (id) {
      const data = await ArticlesController.getOne(id as string);
      res.status(200).json(data);
    } else {
      const data = await ArticlesController.getAll();
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
