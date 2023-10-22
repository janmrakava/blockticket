import { Router } from 'express';
import { Request, Response } from 'express';
import { EventAddressSchema } from '../db/schemas';
import mongoose from 'mongoose';

export const router = Router();

const Event = mongoose.Schema('event', EventAddressSchema);

router.get('events', async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
  } catch (error) {}
});
