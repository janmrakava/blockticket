import { Router } from 'express';
import { Request, Response } from 'express';
import { EventAddress } from '../models/EventsAddresses';

export const EventAddressController = Router();

/**
 * * GET methods
 */

EventAddressController.get('/getAll', async (req: Request, res: Response) => {
  try {
    const addresses = await EventAddress.find();
    if (!addresses || addresses.length === 0) {
      return res.status(404).json({ error: 'Addresses not found' });
    }
    res.send(addresses).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

EventAddressController.get('/getOne/:id', async (req: Request, res: Response) => {
  try {
    const address = await EventAddress.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.send(address).status(200);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

EventAddressController.get('/getByCity/:city', async (req: Request, res: Response) => {
  const searchName = req.params.city;
  try {
    const addressess = await EventAddress.find({
      $or: [{ city: { $regex: searchName, $options: 'i' } }],
    });
    if (!addressess || addressess.length === 0) {
      return res.status(404).json({ error: 'No Events Found with that name' });
    }
    res.send(addressess).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Interval server error' });
  }
});

/**
 * * POST methods
 */

EventAddressController.post('/post', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newAddress = new EventAddress(data);
    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * * DELETE
 */
EventAddressController.delete('/delete/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await EventAddress.findByIdAndDelete(id);
    res.status(204).send(`Address with ${data?._id} was deleted`);
  } catch (error) {
    res.status(400).send({ error: 'Invalid request' });
  }
});
