import { Router } from 'express';
import { Request, Response } from 'express';
import { Event } from '../models/Events';

export const EventController = Router();

EventController.get('/getAll', async (req: Request, res: Response) => {
  try {
    const events = await Event.find().populate('address_id');
    if (!events || events.length === 0) {
      return res.status(404).json({ error: 'Events not found' });
    }
    res.send(events).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

EventController.get('/getOne/:id', async (req: Request, res: Response) => {
  try {
    const event = await Event.findById(req.params.id).populate('address_id');
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.send(event).status(200);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
EventController.get('/getByName/:name', async (req: Request, res: Response) => {
  const searchName = req.params.name;
  try {
    const events = await Event.find({
      $or: [{ 'name.en': { $regex: searchName, $options: 'i' } }, { 'name.cs': { $regex: searchName, $options: 'i' } }],
    }).populate('address_id');
    if (!events || events.length === 0) {
      res.status(404).json({ error: 'No Events Found with that name' });
    }
    res.send(events).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Interval server error' });
  }
});

EventController.put('/update/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedEvent) {
      res.status(404).json({ error: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
