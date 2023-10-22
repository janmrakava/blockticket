import { Router } from 'express';
import { Request, Response } from 'express';
import { EventAddress } from '../models/EventsAddresses';

export const EventAddressController = Router();

EventAddressController.get('/getAll', async (req: Request, res: Response) => {
  try {
    const addresses = await EventAddress.find();
    if (!addresses) {
      return res.status(404).json({ error: 'Events not found' });
    }
    res.send(addresses).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
