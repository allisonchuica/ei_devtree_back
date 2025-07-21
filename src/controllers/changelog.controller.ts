import { Request, Response } from 'express';
import { ChangeLog } from '../models/changelog.model';

export const getChangeLogs = async (_req: Request, res: Response) => {
  try {
    const logs = await ChangeLog.find().sort({ timestamp: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial' });
  }
};

export const createChangeLog = async (req: Request, res: Response) => {
  try {
    const { userId, action, details } = req.body;

    const newLog = new ChangeLog({ userId, action, details });
    const savedLog = await newLog.save();

    res.status(201).json(savedLog);
  } catch (error) {
    res.status(400).json({ error: 'Error al guardar el historial' });
  }
};
