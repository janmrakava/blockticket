import { Router } from 'express';
import { Request, Response } from 'express';
import { Event } from '../models/Events';
import { EventAddress } from '../models/EventsAddresses';

export const EventController = Router();

EventController.get('/getAll', async (req: Request, res: Response) => {
  try {
    const events = await Event.find({}).populate('place_id');
    if (!events) {
      return res.status(404).json({ error: 'Events not found' });
    }
    res.send(events).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

EventController.get('/getOne/:id', async (req: Request, res: Response) => {
  try {
    const event = await Event.findById(req.params.id).populate('place_id');
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    const eventAddress = await EventAddress.findById(event.place_id);
    if (!eventAddress) {
      return res.status(404).json({ error: 'Event address not found' });
    }
    res.send(event).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Interval server error' });
  }
});
