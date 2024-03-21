import { Router } from 'express';
import { Request, Response } from 'express';
import { User } from '../models/Users';
import { Ticket } from '../models/Tickets';
import { Event } from '../models/Events';

export const TicketController = Router();

TicketController.post('/new-ticket', async (req: Request, res: Response) => {
  const { userId, tickets } = req.body;
  try {
    const savedTickets = [];
    for (const ticketData of tickets) {
      const { eventId, eventName, price, date, category, zone, sector, row, seat } = ticketData;

      const newTicket = new Ticket({
        event: eventId,
        name: eventName,
        price: price,
        date: date,
        ticket_category: category,
        zone: zone,
        sector: sector,
        row: row,
        seat: seat,
      });
      const savedTicket = await newTicket.save();
      savedTickets.push(savedTicket);
      await User.findByIdAndUpdate(userId, { $push: { ticket: savedTicket._id } }, { new: true });
      await Event.findByIdAndUpdate(eventId, { $push: { tickets: savedTicket._id } }, { new: true });
    }

    res.status(200).json({ savedTickets, message: 'New Tickets created!' });
  } catch (error) {
    console.error('Error when creating tickets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
