import { EventSchema } from '../schemas';
import mongoose from 'mongoose';

const Event = mongoose.model('events', EventSchema);
//const Address = mongoose.model('event_addresses', EventAddressSchema);

const getEvent = async (artist: string) => {
  const result = await Event.aggregate([
    {
      $match: {
        $or: [{ 'artist.en': `${artist}` }, { 'artist.cs': `${artist}` }],
      },
    },
  ]).exec();
  console.log(result);
};

getEvent('Visual Poetics: New Media in Art');
