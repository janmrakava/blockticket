import { Router } from 'express';
import { Request, Response } from 'express';
import { Event } from '../models/Events';
import { EventAddress } from '../models/EventsAddresses';

export const EventController = Router();

/**
 * * GET methods
 */

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
      return res.status(404).json({ error: 'No Events Found with that name' });
    }
    res.send(events).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Interval server error' });
  }
});

EventController.get('/getByCategory/:category', async (req: Request, res: Response) => {
  const category = req.params.category;
  try {
    const regexCategory = new RegExp(category, 'i');
    const events = await Event.find({ category_of_event: regexCategory }).populate('address_id');
    if (!events || events.length === 0) {
      return res.status(404).json({ error: 'No Events Found in this Category' });
    }
    return res.json(events);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});
EventController.get('/events/:city/:category', async (req: Request, res: Response) => {
  try {
    const { city, category } = req.params;

    // Najdeme události dle kategorie s adresou pomocí populate()
    const eventsInCityAndCategory = await Event.find({ category_of_event: category })
      .populate({
        path: 'address_id',
        match: { city: city }, // Filtrování adresy podle města
        select: '-_id name_of_place country city street street_number zip_code capacity', // Výběr konkrétních polí z adresy
      })
      .exec();

    // Filtrujeme výsledné události, abychom odstranili události, které nemají odpovídající adresu
    const filteredEvents = eventsInCityAndCategory.filter((event) => event.address_id !== null);

    // Pokud nejsou nalezeny události, vrátíme odpovídající chybovou zprávu
    if (filteredEvents.length === 0) {
      return res.status(404).json({ message: 'Žádné události pro zadané kategorie a město nebyly nalezeny.' });
    }

    console.log('Events in City and Category with Address: ', filteredEvents);

    res.json(filteredEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Chyba při získávání událostí.' });
  }
});
/**
 * * UPDATE methods
 */
EventController.put('/update/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
/**
 * * DELETE methods
 */
EventController.delete('/delete/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteAddress = req.body.deleteAddress;
    const event = await Event.findById(id).populate('address_id');

    if (!event) {
      return res.status(404).send({ error: 'Event not found' });
    }

    if (deleteAddress) {
      await EventAddress.findByIdAndDelete(event.address_id);
    }

    await Event.findByIdAndRemove(id);
    res.status(204).send(`Event with ${id} was deleted`);
  } catch (error) {
    res.status(400).send({ error: 'Invalid request' });
  }
});

/**
 * * POST method
 */
EventController.post('/post', async (req: Request, res: Response) => {
  try {
    const eventData = req.body;
    const addressData = eventData.address_id;
    let addressId;

    if (typeof addressData === 'object') {
      const newAddress = new EventAddress(addressData);
      const savedAddress = await newAddress.save();
      addressId = savedAddress._id;
    } else if (typeof addressData === 'string') {
      addressId = addressData;
    }

    const newEvent = new Event({
      ...eventData,
      address_id: addressId,
    });

    const savedEvent = await newEvent.save();

    res.status(201).send(savedEvent);
  } catch (error) {
    res.status(400).send({ error: 'Invalid request' });
  }
});
