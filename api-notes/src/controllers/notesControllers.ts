import { Request, Response } from 'express';

export const getNotes = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: 'Show all Notes' });
};

export const getSingleNote = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: 'Show single Note' });
};
