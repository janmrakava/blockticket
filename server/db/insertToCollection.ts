import mongoose, { ConnectOptions } from 'mongoose';
import { EventSchema, EventAddressSchema } from './schemas';
import dotenv from 'dotenv';

dotenv.config();

const connectionString: string = process.env.ATLAS_URI || '';

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

mongoose
  .connect(connectionString, connectOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: Error) => {
    console.error('Error connecting to MongoDB', error);
  });

const Event = mongoose.model('Events', EventSchema);
const EventAddress = mongoose.model('addresses_events', EventAddressSchema);

const dateString = '23.12.2024';

const dateParts = dateString.split('.');

const day = parseInt(dateParts[0], 10);
const month = parseInt(dateParts[1], 10) - 1;
const year = parseInt(dateParts[2], 10);

const dataObject = new Date(year, month, day);

console.log(dataObject);

const newAddressEvent = new EventAddress({
  name_of_place: 'Winning Group Aréna',
  country: 'Czech republic',
  city: 'Brno',
  street: 'Koliště',
  street_number: 25,
  zip_code: '602000',
});
newAddressEvent
  .save()
  .then((address) => {
    const addressId = address._id;
    console.log('Adresa byla úspěšně vložena: ', address);
    const newEvent = new Event({
      id: 1234567890,
      artist: 'Eminem',
      category_of_event: 'music',
      description: 'The ultimate Eminem concert!',
      date_of_the_event: dataObject,
      date_of_start_sell_tickets: 1673391600,
      capacity: 22500,
      ticket_availabiity: true,
      address: addressId,
    });
    return newEvent.save();
  })
  .then((event) => {
    console.log('Událost byla úspěšně vložena:', event);
  })
  .catch((error) => {
    console.error('Chyba při vkládání události:', error);
  });
