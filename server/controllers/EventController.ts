import { Router } from 'express';
import { Request, Response } from 'express';
import { Event } from '../models/Events';

export const EventController = Router();

EventController.get('/', async (req: Request, res: Response) => {
  try {
    const events = await Event.find({});
    if (!events) {
      return res.status(404).json({ error: 'Events not found' });
    }
    res.send(events).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
